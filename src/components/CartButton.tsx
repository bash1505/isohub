
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const CartButton = () => {
  const { totalItems } = useCart();

  return (
    <Button variant="outline" size="sm" asChild className="relative">
      <Link to="/cart">
        <ShoppingCart className="h-4 w-4 mr-1" />
        <span>Cart</span>
        {totalItems > 0 && (
          <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
            {totalItems}
          </Badge>
        )}
      </Link>
    </Button>
  );
};

export default CartButton;
