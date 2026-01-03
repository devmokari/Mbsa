import { Card, CardContent } from '../components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';

export function ContactPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Get in touch to book your free 15-minute eligibility chat or to ask any questions about our services.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl mb-2">Phone</h3>
                        <p className="text-gray-600 mb-2">
                          Call us for your free 15-minute eligibility chat
                        </p>
                        <a href="tel:1300123456" className="text-blue-600 hover:text-blue-700 text-lg font-semibold">
                          1300 123 456
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl mb-2">Email</h3>
                        <p className="text-gray-600 mb-2">
                          Send us a message and we'll get back to you soon
                        </p>
                        <a href="mailto:info@mbsa.com.au" className="text-blue-600 hover:text-blue-700 text-lg font-semibold">
                          info@mbsa.com.au
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl mb-2">Location</h3>
                        <p className="text-gray-600">
                          Adelaide, South Australia
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl mb-2">Hours</h3>
                        <div className="text-gray-600 space-y-1">
                          <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                          <p>Saturday - Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl mb-8">Send Us a Message</h2>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="John Smith" className="mt-2" required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="john@example.com" className="mt-2" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="0400 000 000" className="mt-2" required />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="15-Minute Eligibility Chat" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Please let us know how we can help you..."
                        className="mt-2 min-h-[150px]"
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                      Send Message
                    </Button>
                    <p className="text-sm text-gray-500">
                      * Required fields. We'll respond to your inquiry within 1-2 business days.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Locations and Hospitals */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-8 text-center">Clinic Locations and Hospitals</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Consulting Rooms</h3>
                <div className="space-y-3 text-gray-600">
                  <p><strong>Address:</strong></p>
                  <p>Adelaide Medical Centre<br />
                  123 Medical Street<br />
                  Adelaide SA 5000</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Hospital Affiliations</h3>
                <div className="space-y-3 text-gray-600">
                  <p>Dr Niazi operates at:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Adelaide Private Hospital</li>
                    <li>Calvary Adelaide Hospital</li>
                    <li>Other accredited facilities</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">Ready to Take the First Step?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Book your free 15-minute eligibility chat today. No obligation, just a friendly conversation about whether our program might be right for you.
          </p>
          <a href="tel:1300123456">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Call 1300 123 456
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
