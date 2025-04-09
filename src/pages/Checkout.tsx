
import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Landmark, Wallet } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Form state
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    company: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePaymentMethodChange = (value: string) => {
    setPaymentMethod(value);
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Order placed successfully!",
        description: "You will receive a confirmation email shortly.",
      });
      
      clearCart();
      navigate('/thank-you');
      setLoading(false);
    }, 2000);
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Button variant="outline" size="sm" asChild>
          <Link to="/cart" className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Cart
          </Link>
        </Button>
      </div>

      <h1 className="text-3xl font-bold tracking-tight mb-6">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmitOrder}>
            <div className="space-y-6">
              <div className="bg-card border rounded-lg p-6">
                <h2 className="text-xl font-medium mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company (Optional)</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your Company Ltd."
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <h2 className="text-xl font-medium mb-4">Billing Details</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      placeholder="123 Main Street"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        name="city"
                        placeholder="Cape Town"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        placeholder="0000"
                        required
                        value={formData.postalCode}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+27 12 345 6789"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <h2 className="text-xl font-medium mb-4">Payment Method</h2>
                
                <Tabs 
                  defaultValue="card" 
                  value={paymentMethod} 
                  onValueChange={handlePaymentMethodChange}
                  className="w-full"
                >
                  <TabsList className="grid grid-cols-3 w-full">
                    <TabsTrigger value="card">Credit Card</TabsTrigger>
                    <TabsTrigger value="eft">EFT</TabsTrigger>
                    <TabsTrigger value="ewallet">E-Wallet</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="card" className="mt-4">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="4242 4242 4242 4242" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" />
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <div className="p-2 border rounded flex items-center justify-center bg-white">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6" />
                        </div>
                        <div className="p-2 border rounded flex items-center justify-center bg-white">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="MasterCard" className="h-6" />
                        </div>
                        <div className="p-2 border rounded flex items-center justify-center bg-white">
                          <img src="https://www.payfast.co.za/assets/images/logos/payfast-logo.svg" alt="PayFast" className="h-6" />
                        </div>
                        <div className="p-2 border rounded flex items-center justify-center bg-white">
                          <img src="https://www.paygate.co.za/wp-content/themes/paygate-theme/images/logo.png" alt="PayGate" className="h-6" />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="eft" className="mt-4">
                    <div className="space-y-4">
                      <div className="p-4 bg-muted rounded-md">
                        <h3 className="font-medium mb-2">Bank Transfer Details</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Please use your order number as the payment reference. Your order will be processed once funds are cleared in our account.
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="font-medium">Bank:</span>
                            <span>Tymebank</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Account Name:</span>
                            <span>Fisher Infusions Pty Ltd</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Account Number:</span>
                            <span>53000622911</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Branch Code:</span>
                            <span>678910</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Reference:</span>
                            <span>Your Name + Invoice #</span>
                          </div>
                        </div>
                      </div>
                      <RadioGroup defaultValue="proof">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="proof" id="proof" />
                          <Label htmlFor="proof">I'll send proof of payment to accounts@fisherinfused.co.za</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ewallet" className="mt-4">
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground mb-3">
                        Choose from popular South African e-wallet and payment services.
                      </p>
                      <RadioGroup defaultValue="snapscan">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2 p-3 border rounded-md">
                            <RadioGroupItem value="snapscan" id="snapscan" />
                            <Label htmlFor="snapscan" className="flex items-center gap-2 cursor-pointer">
                              <img src="https://www.snapscan.co.za/images/logos/secondary-yellow.svg" alt="SnapScan" className="h-6" />
                              <span>SnapScan</span>
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 p-3 border rounded-md">
                            <RadioGroupItem value="zapper" id="zapper" />
                            <Label htmlFor="zapper" className="flex items-center gap-2 cursor-pointer">
                              <img src="https://www.zapper.com/img/Zapper_logo.png" alt="Zapper" className="h-6" />
                              <span>Zapper</span>
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 p-3 border rounded-md">
                            <RadioGroupItem value="ozow" id="ozow" />
                            <Label htmlFor="ozow" className="flex items-center gap-2 cursor-pointer">
                              <img src="https://assets.paystack.com/assets/img/logos/channels/ozow.svg" alt="Ozow" className="h-6" />
                              <span>Ozow (Instant EFT)</span>
                            </Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            <div className="mt-8">
              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? 'Processing...' : `Complete Order • R ${totalPrice.toLocaleString()}`}
              </Button>
            </div>
          </form>
        </div>

        <div className="w-full">
          <div className="bg-card border rounded-lg p-6 sticky top-4">
            <h2 className="font-semibold text-xl mb-4">Order Summary</h2>
            
            <div className="divide-y">
              {items.map(item => (
                <div key={item.package.id} className="py-3 flex justify-between">
                  <div>
                    <div className="font-medium">{item.package.title.length > 30 ? `${item.package.title.substring(0, 30)}...` : item.package.title}</div>
                    <div className="text-sm text-muted-foreground">Qty: {item.quantity}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">R {(item.package.price * item.quantity).toLocaleString()}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t mt-4 pt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>R {totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">VAT</span>
                <span>Included</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2">
                <span>Total</span>
                <span>R {totalPrice.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="mt-6 text-sm text-muted-foreground">
              <p>By completing your purchase, you agree to our <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and acknowledge our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
