
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users, MapPin, Video } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { toast } from '@/hooks/use-toast';

const consultationTypes = [
  {
    id: 'initial',
    title: 'Initial Consultation',
    description: 'First-time discussion to understand your needs and objectives.',
    duration: '60 min',
    price: 'Free',
    icon: Users
  },
  {
    id: 'implementation',
    title: 'Implementation Planning',
    description: 'Detailed planning session for your ISO implementation journey.',
    duration: '90 min',
    price: 'R2,499',
    icon: Calendar
  },
  {
    id: 'audit',
    title: 'Pre-Audit Review',
    description: 'Comprehensive review before your certification audit.',
    duration: '120 min',
    price: 'R3,499',
    icon: Clock
  }
];

const BookConsultation = () => {
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      consultationType: '',
      message: '',
      preferredDate: '',
      preferredTime: ''
    }
  });

  const onSubmit = (data: any) => {
    console.log('Form submitted:', data);
    toast({
      title: "Consultation Request Submitted",
      description: "We'll contact you shortly to confirm your appointment.",
    });
    form.reset();
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Book a Consultation</h1>
        <p className="text-muted-foreground max-w-3xl">
          Schedule a consultation with our ISO experts to discuss your organization's needs,
          implementation challenges, or certification preparation.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Consultation Types</h2>
            
            {consultationTypes.map((type) => (
              <Card key={type.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <type.icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-3">{type.description}</CardDescription>
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{type.duration}</span>
                    </div>
                    <div className="font-medium">{type.price}</div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Consultation Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <Video className="h-4 w-4 text-primary" />
                  <span>Virtual Consultation (Zoom/Teams)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>On-site Consultation (Additional fees may apply)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Available Monday-Friday, 9am-5pm</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Book Your Consultation</CardTitle>
              <CardDescription>
                Fill out the form below to request your preferred consultation time.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input {...form.register('name')} placeholder="Your full name" required />
                      </FormControl>
                    </FormItem>
                    
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...form.register('email')} type="email" placeholder="your.email@company.com" required />
                      </FormControl>
                    </FormItem>
                    
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input {...form.register('phone')} placeholder="Your contact number" />
                      </FormControl>
                    </FormItem>
                    
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input {...form.register('company')} placeholder="Your organization name" />
                      </FormControl>
                    </FormItem>
                    
                    <FormItem>
                      <FormLabel>Preferred Date</FormLabel>
                      <FormControl>
                        <Input {...form.register('preferredDate')} type="date" />
                      </FormControl>
                    </FormItem>
                    
                    <FormItem>
                      <FormLabel>Preferred Time</FormLabel>
                      <FormControl>
                        <Input {...form.register('preferredTime')} type="time" />
                      </FormControl>
                    </FormItem>
                  </div>
                  
                  <FormItem>
                    <FormLabel>Consultation Type</FormLabel>
                    <select 
                      {...form.register('consultationType')} 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    >
                      <option value="">Select a consultation type</option>
                      {consultationTypes.map((type) => (
                        <option key={type.id} value={type.id}>{type.title}</option>
                      ))}
                    </select>
                  </FormItem>
                  
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        {...form.register('message')} 
                        placeholder="Please share any specific questions or topics you'd like to discuss"
                        className="min-h-[120px]"
                      />
                    </FormControl>
                  </FormItem>
                  
                  <div className="flex justify-end">
                    <Button type="submit">Request Consultation</Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;
