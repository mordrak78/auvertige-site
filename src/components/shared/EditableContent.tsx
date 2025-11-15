import * as React from 'react';
import { usePageContentDisplay, type PageContent } from '@/hooks/usePageContentDisplay';

interface EditableContentProps {
  pageId: string;
  defaultContent?: Partial<PageContent>;
  renderTitle?: (title: string) => React.ReactNode;
  renderParagraphs?: (paragraphs: string[]) => React.ReactNode;
  renderImages?: (images: PageContent['images']) => React.ReactNode;
  className?: string;
}

/**
 * Composant générique pour afficher le contenu éditable d'une page
 */
export const EditableContent: React.FC<EditableContentProps> = ({
  pageId,
  defaultContent,
  renderTitle,
  renderParagraphs,
  renderImages,
  className = '',
}) => {
  const content = usePageContentDisplay(pageId, defaultContent);

  if (!content) {
    return null;
  }

  return (
    <div className={className}>
      {content.title && renderTitle && renderTitle(content.title)}
      {content.paragraphs && content.paragraphs.length > 0 && renderParagraphs && renderParagraphs(content.paragraphs)}
      {content.images && content.images.length > 0 && renderImages && renderImages(content.images)}
    </div>
  );
};

/**
 * Composant pour afficher un titre éditable
 */
export const EditableTitle: React.FC<{
  pageId: string;
  defaultTitle: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}> = ({ pageId, defaultTitle, className = '', as: Component = 'h1' }) => {
  const content = usePageContentDisplay(pageId, { title: defaultTitle });
  const title = content?.title || defaultTitle;

  return <Component className={className}>{title}</Component>;
};

/**
 * Composant pour afficher des paragraphes éditables
 */
export const EditableParagraphs: React.FC<{
  pageId: string;
  defaultParagraphs: string[];
  className?: string;
  renderParagraph?: (text: string, index: number) => React.ReactNode;
}> = ({ pageId, defaultParagraphs, className = '', renderParagraph }) => {
  const content = usePageContentDisplay(pageId, { paragraphs: defaultParagraphs });
  const paragraphs = content?.paragraphs || defaultParagraphs;

  if (!renderParagraph) {
    return (
      <div className={className}>
        {paragraphs.map((text, index) => (
          <p key={index} className="mb-4">
            {text}
          </p>
        ))}
      </div>
    );
  }

  return (
    <div className={className}>
      {paragraphs.map((text, index) => (
        <React.Fragment key={index}>{renderParagraph(text, index)}</React.Fragment>
      ))}
    </div>
  );
};

