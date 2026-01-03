import { Card, CardContent } from '../components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export function OurProgramPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl mb-6">Our Program</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            A structured 2-year program designed to support you before, during, and after treatment.
          </p>
        </div>
      </section>

      <section id="why" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-6">Why a Structured 2 Year Program</h2>
          <p className="text-lg text-gray-600 mb-8">
            Long-term success in weight management requires ongoing support, education, and monitoring. Our 2-year program ensures you have the resources and guidance needed at every stage of your journey.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Continuous medical supervision',
              'Regular progress monitoring',
              'Timely intervention when needed',
              'Sustained behavior change support',
              'Long-term outcome optimization',
              'Comprehensive follow-up care'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="care-planning" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-6">Personalised Care Planning</h2>
          <p className="text-lg text-gray-600 mb-8">
            Every patient receives an individualized care plan tailored to their specific health needs, goals, and circumstances.
          </p>
          <Card>
            <CardContent className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                  <div>
                    <h3 className="font-semibold mb-1">Initial Assessment</h3>
                    <p className="text-gray-600">Comprehensive evaluation of your health status and goals</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                  <div>
                    <h3 className="font-semibold mb-1">Customized Plan Development</h3>
                    <p className="text-gray-600">Creation of your personalized treatment and support plan</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                  <div>
                    <h3 className="font-semibold mb-1">Regular Review</h3>
                    <p className="text-gray-600">Ongoing assessment and plan adjustments as needed</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="dietitian" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-6">Dietitian Support</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our in-house dietitian provides expert nutritional guidance before and after treatment to help you achieve sustainable results.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Pre-Treatment Support</h3>
                <p className="text-gray-600">Nutritional preparation and education to optimize treatment outcomes.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Post-Treatment Guidance</h3>
                <p className="text-gray-600">Ongoing dietary counseling to support your new lifestyle and nutritional needs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="support" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-6">Psychological and Exercise Support</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-4">Psychological Support</h3>
              <p className="text-lg text-gray-600 mb-4">
                Access to psychological support when clinically appropriate to address emotional wellbeing and behavioral aspects of weight management.
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-4">Exercise Guidance</h3>
              <p className="text-lg text-gray-600 mb-4">
                Optional exercise support with a personal trainer, available face-to-face or virtually, to help you develop and maintain an active lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="lifetime" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-6">Ongoing and Lifetime Support</h2>
          <p className="text-lg text-gray-600 mb-8">
            While our structured program runs for two years, we remain committed to your long-term success with ongoing access to support beyond the initial program period.
          </p>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-xl mb-4">Lifetime Care Philosophy</h3>
              <p className="text-gray-700">
                Weight management is a lifelong journey. Our team remains available to support you with consultations, guidance, and resources as you continue your health journey beyond the formal program period.
              </p>
            </CardContent>
          </Card>
          <div className="text-center mt-12">
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Learn More About Our Program
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
