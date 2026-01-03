import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { title: 'Home', path: '/' },
    {
      title: 'Start Your Journey',
      path: '/start-journey',
      submenu: [
        { title: 'Is Weight Loss Treatment Right for Me?', path: '/start-journey#eligibility' },
        { title: 'Your First Consultation Explained', path: '/start-journey#consultation' },
        { title: 'Understanding Your Options', path: '/start-journey#options' },
        { title: 'Your Care Journey Step by Step', path: '/start-journey#journey' },
        { title: 'Common Questions and Concerns', path: '/start-journey#faq' },
        { title: 'Life After Treatment', path: '/start-journey#life-after' },
      ],
    },
    {
      title: 'Treatment Options',
      path: '/treatment-options',
      submenu: [
        { title: 'Weight Management Pathways', path: '/treatment-options#pathways' },
        { title: 'Bariatric Surgery Overview', path: '/treatment-options#surgery' },
        { title: 'Gastric Band', path: '/treatment-options#band' },
        { title: 'Gastric Bypass', path: '/treatment-options#bypass' },
        { title: 'Gastric Sleeve', path: '/treatment-options#sleeve' },
        { title: 'Mini Bypass', path: '/treatment-options#mini' },
        { title: 'Non-Surgical Weight Management', path: '/treatment-options#non-surgical' },
      ],
    },
    {
      title: 'Our Program',
      path: '/our-program',
      submenu: [
        { title: 'Why a Structured 2 Year Program', path: '/our-program#why' },
        { title: 'Personalised Care Planning', path: '/our-program#care-planning' },
        { title: 'Dietitian Support', path: '/our-program#dietitian' },
        { title: 'Psychological and Exercise Support', path: '/our-program#support' },
        { title: 'Ongoing and Lifetime Support', path: '/our-program#lifetime' },
      ],
    },
    {
      title: 'Our Team',
      path: '/our-team',
      submenu: [
        { title: 'Meet Dr Mani Niazi', path: '/our-team#doctor' },
        { title: 'Care Team', path: '/our-team#team' },
        { title: 'Areas of Practice', path: '/our-team#practice' },
      ],
    },
    { title: 'Costs', path: '/costs' },
    { title: 'Resources', path: '/resources' },
    { title: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">MBSA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.path}>
                    {item.submenu ? (
                      <>
                        <NavigationMenuTrigger
                          className={`${
                            isActive(item.path) ? 'text-blue-600' : ''
                          }`}
                        >
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4">
                            {item.submenu.map((subitem) => (
                              <li key={subitem.path}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={subitem.path}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-blue-600 focus:bg-gray-100"
                                  >
                                    <div className="text-sm font-medium leading-none">
                                      {subitem.title}
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link to={item.path}>
                        <Button
                          variant="ghost"
                          className={`${
                            isActive(item.path) ? 'text-blue-600' : ''
                          }`}
                        >
                          {item.title}
                        </Button>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700">Book Consultation</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <div className="px-4 py-4 space-y-2">
            {navigationItems.map((item) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  className={`block py-2 px-3 rounded-md ${
                    isActive(item.path)
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
                {item.submenu && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.path}
                        to={subitem.path}
                        className="block py-2 px-3 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subitem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
