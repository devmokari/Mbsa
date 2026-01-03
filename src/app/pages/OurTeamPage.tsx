import { Card, CardContent } from '../components/ui/card';
import { Users, Stethoscope, Award } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function OurTeamPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl mb-6">Our Team</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Meet the dedicated professionals committed to your care and long-term success.
          </p>
        </div>
      </section>

      <section id="doctor" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1666886573590-5815157da865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoY2FyZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njc0MzE5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Dr Mani Niazi"
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl mb-6">Meet Dr Mani Niazi</h2>
              <p className="text-lg text-gray-600 mb-4">
                Dr Mani Niazi is an experienced bariatric and general surgeon dedicated to providing comprehensive, patient-centered care.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With extensive training and experience in weight management surgery, Dr Niazi brings a thoughtful, evidence-based approach to patient care. He believes in the importance of long-term support and comprehensive care coordination.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Qualifications</h3>
                    <p className="text-gray-600">Fellowship-trained in Bariatric Surgery with extensive clinical experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Stethoscope className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Expertise</h3>
                    <p className="text-gray-600">Bariatric surgery, general surgery, and comprehensive weight management</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Approach</h3>
                    <p className="text-gray-600">Patient-centered care with focus on education, support, and long-term outcomes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-6 text-center">Care Team</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our multidisciplinary team works together to provide comprehensive, coordinated care throughout your journey.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Stethoscope className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl mb-3">Surgeon</h3>
                <p className="text-gray-600">
                  Dr Niazi oversees your medical care, performs procedures, and provides ongoing clinical supervision.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl mb-3">Dietitian</h3>
                <p className="text-gray-600">
                  In-house dietitian providing nutritional guidance and support before and after treatment.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl mb-3">Support Services</h3>
                <p className="text-gray-600">
                  Access to psychological support and exercise guidance when clinically appropriate.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="practice" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-6">Areas of Practice</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Weight Management and Bariatric Surgery</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Comprehensive weight management programs</li>
                  <li>• Gastric sleeve surgery</li>
                  <li>• Gastric bypass surgery</li>
                  <li>• Gastric band procedures</li>
                  <li>• Mini gastric bypass</li>
                  <li>• Non-surgical weight management options</li>
                  <li>• Long-term follow-up and support</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">General Surgery</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Hernia repairs</li>
                  <li>• Gallbladder surgery</li>
                  <li>• Endoscopic procedures</li>
                  <li>• Diagnostic laparoscopy</li>
                  <li>• Other general surgical procedures</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">Team-Based Care Philosophy</h2>
          <p className="text-lg text-blue-100">
            We believe the best outcomes come from coordinated, multidisciplinary care. Our team works together to ensure you receive comprehensive support at every stage of your journey, with clear communication and consistent guidance.
          </p>
        </div>
      </section>
    </div>
  );
}
