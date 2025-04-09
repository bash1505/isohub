
import React from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingCart, ArrowLeft, Plus, Minus, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto py-16 px-4">
        <div className="text-center">
          <div className="inline-flex rounded-full bg-primary/10 p-6 mb-4">
            <ShoppingCart className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Looks like you haven't added any document packages to your cart yet.
          </p>
          <Button asChild>
            <Link to="/store">Explore Document Store</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Button variant="outline" size="sm" asChild>
          <Link to="/store" className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Continue Shopping
          </Link>
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-grow">
          <h1 className="text-3xl font-bold tracking-tight mb-6">Shopping Cart</h1>
          
          <div className="space-y-6">
            {items.map((item) => (
              <div key={item.package.id} className="flex flex-col sm:flex-row border rounded-lg p-4 gap-4">
                <div className="flex items-center gap-3 flex-grow">
                  <div className="bg-primary/10 p-3 rounded-md">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium">{item.package.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.package.description.substring(0, 100)}...</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-8">
                  <div className="flex items-center">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.package.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="mx-2 w-8 text-center">{item.quantity}</span>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.package.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="font-medium">R {(item.package.price * item.quantity).toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">R {item.package.price.toLocaleString()} each</div>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      onClick={() => removeFromCart(item.package.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <Button variant="outline" size="sm" onClick={clearCart}>Clear Cart</Button>
          </div>
        </div>
        
        <div className="w-full md:w-80 lg:w-96">
          <div className="bg-card border rounded-lg p-6 sticky top-4">
            <h2 className="font-semibold text-xl mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Items ({items.length})</span>
                <span>R {totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">VAT</span>
                <span>Included</span>
              </div>
              <div className="border-t pt-3 mt-3 flex justify-between font-medium text-lg">
                <span>Total</span>
                <span>R {totalPrice.toLocaleString()}</span>
              </div>
            </div>
            
            <Button className="w-full" onClick={handleCheckout}>
              Proceed to Checkout
            </Button>
            
            <div className="mt-4 text-sm text-center text-muted-foreground">
              Free lifetime updates with all purchases
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
