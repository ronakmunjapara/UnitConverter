
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, ChevronRight, Home, Ruler, Weight, Thermometer, Clock, AreaChart, Volume2 } from 'lucide-react';

const categories = [
  {
    name: 'Common Converters',
    items: [
      { name: 'Length', href: '/length', icon: Ruler },
      { name: 'Weight', href: '/weight', icon: Weight },
      { name: 'Temperature', href: '/temperature', icon: Thermometer },
      { name: 'Time', href: '/time', icon: Clock },
      { name: 'Area', href: '/area', icon: AreaChart },
      { name: 'Volume', href: '/volume', icon: Volume2 },
    ]
  }
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div 
      className={cn(
        "min-h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4">
        {!isCollapsed && (
          <NavLink to="/" className="flex items-center gap-2">
            <span className="font-bold text-xl text-brand-600">UnitConvert</span>
          </NavLink>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="ml-auto"
        >
          <Menu size={20} />
        </Button>
      </div>
      
      <nav className="mt-4">
        <ul className="space-y-1 px-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                )
              }
            >
              <Home size={20} />
              {!isCollapsed && <span>Home</span>}
            </NavLink>
          </li>
        </ul>
        
        {categories.map((category, index) => (
          <div key={index} className="mt-6">
            {!isCollapsed && (
              <h2 className="px-5 text-xs uppercase font-semibold text-sidebar-foreground/60 mb-2">
                {category.name}
              </h2>
            )}
            <ul className="space-y-1 px-2">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                          : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                      )
                    }
                  >
                    <item.icon size={20} />
                    {!isCollapsed && <span>{item.name}</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
}
