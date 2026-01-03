import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Heart, Users, Calendar, Award, Phone, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl mb-6">
                Personalised care for weight loss surgery and long-term weight management
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Care begins with a thorough consultation and continues with structured long-term support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Book a Consultation
                  </Button>
                </Link>
                <Link to="/our-program">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Explore Our Program
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1666886573590-5815157da865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoY2FyZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njc0MzE5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Healthcare Professional"
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The MBSA 2 Year Program */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">
              Care That Extends Beyond a Single Appointment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe long term care requires more than a one-off intervention. MBSA offers a structured 2-year program designed to support patients before treatment, after treatment, and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-blue-600 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl mb-2">Personalised Care Plans</h3>
                <p className="text-gray-600">
                  Tailored to individual circumstances, ensuring your unique needs and goals are addressed at every stage.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-600 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl mb-2">In-House Dietitian Support</h3>
                <p className="text-gray-600">
                  Expert nutritional guidance before and after treatment to help you achieve sustainable results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-600 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl mb-2">Two Years of Follow-Up</h3>
                <p className="text-gray-600">
                  Complementary bulk billed follow up consultations with your surgeon for comprehensive ongoing care.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-600 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl mb-2">Psychological Support</h3>
                <p className="text-gray-600">
                  Access to psychological support when clinically appropriate to support your mental wellbeing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-600 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl mb-2">Exercise Guidance</h3>
                <p className="text-gray-600">
                  Optional personal trainer sessions available face to face or virtually to support your fitness journey.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-600 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl mb-2">Ongoing Access</h3>
                <p className="text-gray-600">
                  Ongoing access to support beyond the initial program for lifelong care and guidance.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/our-program">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Learn More About Our Program
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience and Professional Care */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1765222385024-5d7304e609f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzY3NDI0NDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Medical Team"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl mb-6">
                Care supported by a dedicated clinical team
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Care at MBSA is delivered through a coordinated team approach. Patients are supported by Dr Mani Niazi, an experienced bariatric and general surgeon, alongside an in-house dietitian and access to psychological and exercise support when appropriate.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team-based model allows care to be guided, consistent, and supported at every stage, with a focus on education, follow up, and informed decision making.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <p className="text-gray-500">Video Placeholder</p>
                </div>
              </div>
              <Link to="/our-team">
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Meet Our Care Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">
              Independent Reviews from Patients
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              Patients sometimes choose to share feedback about their experiences independently through Google Reviews.
            </p>
            <a
              href="https://www.google.com/search?q=mbsa+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              View MBSA Google Reviews
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <p className="text-center text-sm text-gray-500">
            These reviews are published on an external platform and are not selected or edited by MBSA.
          </p>
        </div>
      </section>

      {/* Take the Next Step */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">
              Start Your Journey with a Simple Conversation
            </h2>
            <p className="text-xl text-blue-100">
              Choosing the right path for your health is a significant decision, and it is natural to have questions before committing to a clinical appointment. We offer a clear, two-step process to ensure you feel supported and informed from day one:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl text-gray-900 mb-3">
                  Step 1: Free 15-Minute Eligibility Chat
                </h3>
                <p className="text-gray-600">
                  Speak with our team for a no-obligation, 15-minute phone call to discuss our program requirements and determine if our care pathways are a potential fit for your needs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl text-gray-900 mb-3">
                  Step 2: Formal Consultation with Dr. Niazi
                </h3>
                <p className="text-gray-600">
                  If the program is right for you, we will arrange a formal medical consultation. During this session, Dr. Niazi will perform a thorough assessment and confirm the specific surgical or non-surgical treatment plan that suits your individual health goals.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <a href="tel:1300123456">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Phone className="mr-2 h-5 w-5" />
                Call 1300 123 456 to Book Your 15-Minute Eligibility Chat
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
