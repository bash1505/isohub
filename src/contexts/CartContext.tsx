
import React, { createContext, useContext, useState, useEffect } from 'react';
import { DocumentPackage } from '@/components/DocumentPackageCard';
import { useToast } from '@/components/ui/use-toast';

interface CartItem {
  package: DocumentPackage;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (pkg: DocumentPackage) => void;
  removeFromCart: (packageId: string) => void;
  updateQuantity: (packageId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { toast } = useToast();
  const [items, setItems] = useState<CartItem[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setItems(parsedCart);
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
    
    // Calculate totals
    const itemCount = items.reduce((total, item) => total + item.quantity, 0);
    const priceTotal = items.reduce((total, item) => total + (item.package.price * item.quantity), 0);
    
    setTotalItems(itemCount);
    setTotalPrice(priceTotal);
  }, [items]);

  const addToCart = (pkg: DocumentPackage) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.package.id === pkg.id);
      
      if (existingItem) {
        toast({
          title: "Already in cart",
          description: `${pkg.title} quantity increased to ${existingItem.quantity + 1}`,
        });
        
        return prevItems.map(item => 
          item.package.id === pkg.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        toast({
          title: "Added to cart",
          description: `${pkg.title} added to your cart`,
        });
        
        return [...prevItems, { package: pkg, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (packageId: string) => {
    setItems(prevItems => prevItems.filter(item => item.package.id !== packageId));
    
    toast({
      title: "Removed from cart",
      description: "Item removed from your cart",
    });
  };

  const updateQuantity = (packageId: string, quantity: number) => {
    if (quantity < 1) return;
    
    setItems(prevItems => 
      prevItems.map(item => 
        item.package.id === packageId 
          ? { ...item, quantity } 
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
    });
  };

  return (
    <CartContext.Provider value={{ 
      items, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
