import { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BrandName } from '@/components/shared/BrandName';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import useScrollOpacity from '@/hooks/useScrollOpacity';
import { useOptimizedInteraction } from '@/hooks/useOptimizedInteraction';
import { NavLink } from '@/components/shared/NavLink';
import { images } from '@/data/images';
import { OptimizedImage } from '@/components/shared/OptimizedImage';

const navigationItems = [
  { label: 'Nos services', href: '/services' },
  { label: 'Créations florales', href: '/creations-florales' },
  { label: 'Événements', href: '/evenements', icon: Instagram },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const opacity = useScrollOpacity(100);
  const { scheduleTask } = useOptimizedInteraction();
  const location = useLocation();

  const handleCall = useCallback(() => {
    scheduleTask(() => {
      window.location.href = 'tel:0240541002';
    }, 'high');
  }, [scheduleTask]);

  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        opacity > 0.8 && 'shadow-lg'
      )}
      style={{
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-32">
          {/* Logo avec animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" aria-label="Retour à l'accueil">
                <OptimizedImage
                  src={images.logos.logo9}
                  alt="au ver'tige Logo"
                  className="h-24 w-24 object-contain"
                  priority
                  width={96}
                  height={96}
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Navigation Desktop avec animations */}
          <nav className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                {navigationItems.map((item, index) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <NavigationMenuItem key={item.href}>
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      >
                        <NavigationMenuLink asChild>
                          <motion.div
                            whileHover={{ y: -2 }}
                            whileTap={{ y: 0 }}
                          >
                            <NavLink
                              to={item.href}
                              className={cn(
                                'h-10 px-4 py-2 text-base relative flex items-center gap-2',
                                isActive && 'text-sage-600'
                              )}
                            >
                              {item.label}
                              {item.icon && (
                                <item.icon size={16} className="text-sage-600" />
                              )}
                              {isActive && (
                                <motion.div
                                  layoutId="activeNav"
                                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-sage-600"
                                  initial={false}
                                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                              )}
                            </NavLink>
                          </motion.div>
                        </NavigationMenuLink>
                      </motion.div>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Contact Info Desktop avec animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:flex items-center space-x-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={handleCall}
                className="bg-sage-600 hover:bg-sage-700 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 min-h-[44px]"
                aria-label="Appeler au ver'tige au 02 40 54 10 02"
              >
                <Phone size={20} className="mr-2" />
                <span className="text-lg">02 40 54 10 02</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Menu Mobile avec animations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-sage-800 hover:text-sage-600 min-h-[44px] min-w-[44px]"
                    aria-label="Ouvrir le menu de navigation"
                  >
                    <Menu size={24} />
                  </Button>
                </motion.div>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-8">
                  <AnimatePresence>
                    {navigationItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <NavLink
                          to={item.href}
                          onClick={handleMenuClose}
                          className="text-sage-800 hover:text-sage-600 transition-all duration-300 font-medium px-4 py-3 relative group min-h-[44px] flex items-center gap-2"
                          activeClassName="text-sage-600"
                        >
                          {item.label}
                          {item.icon && (
                            <item.icon size={16} className="text-sage-600" />
                          )}
                        </NavLink>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Bouton téléphone mobile avec animation */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: navigationItems.length * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      onClick={() => {
                        handleCall();
                        handleMenuClose();
                      }}
                      className="bg-sage-600 hover:bg-sage-700 text-white px-4 py-3 rounded-full font-semibold transition-all duration-300 mt-4 shadow-md min-h-[44px] w-full"
                      aria-label="Appeler au ver'tige au 02 40 54 10 02"
                    >
                      <Phone size={18} className="mr-2" />
                      <span>02 40 54 10 02</span>
                    </Button>
                  </motion.div>
                </nav>
              </SheetContent>
            </Sheet>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
