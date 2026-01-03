import { Card, CardContent } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { CheckCircle2, HelpCircle, Calendar, Map, Heart, Smile } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export function StartJourneyPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl mb-6">Start Your Journey</h1>
            <p className="text-xl text-blue-100">
              Support for patients seeking clarity before decisions. We're here to guide you through every step of your weight management journey.
            </p>
          </div>
        </div>
      </section>

      {/* Is Weight Loss Treatment Right for Me */}
      <section id="eligibility" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-6">Is Weight Loss Treatment Right for Me?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Weight loss treatment may be suitable if you have tried other methods without sustained success and meet certain clinical criteria. Our team will work with you to assess your individual circumstances.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <CheckCircle2 className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl mb-2">Clinical Assessment</h3>
                <p className="text-gray-600">
                  Our comprehensive evaluation considers your BMI, health conditions, weight history, and overall wellbeing.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <CheckCircle2 className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl mb-2">Individual Considerations</h3>
                <p className="text-gray-600">
                  Every patient's journey is unique. We take time to understand your specific needs and goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Your First Consultation */}
      <section id="consultation" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-6">Your First Consultation Explained</h2>
          <p className="text-lg text-gray-600 mb-8">
            Your first consultation is an opportunity to discuss your health goals, understand treatment options, and ask questions in a supportive environment.
          </p>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Medical History Review</h3>
                    <p className="text-gray-600">
                      Dr. Niazi will review your medical history, current health status, and previous weight management attempts.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Treatment Options Discussion</h3>
                    <p className="text-gray-600">
                      We'll explore surgical and non-surgical options that may be appropriate for your situation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Questions and Concerns</h3>
                    <p className="text-gray-600">
                      Time is dedicated to addressing your questions and concerns about the treatment process.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Understanding Your Options */}
      <section id="options" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-6">Understanding Your Options</h2>
          <p className="text-lg text-gray-600 mb-8">
            Weight management involves various approaches, from lifestyle modifications to surgical interventions. We help you understand which options align with your health needs.
          </p>
          <div className="text-center">
            <Link to="/treatment-options">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Explore Treatment Options
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Your Care Journey */}
      <section id="journey" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-6">Your Care Journey Step by Step</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our structured approach ensures you receive comprehensive care at every stage of your journey.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl mb-1">Initial Consultation</h3>
                <p className="text-gray-600">Free 15-minute eligibility chat followed by formal consultation with Dr. Niazi</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl mb-1">Preparation Phase</h3>
                <p className="text-gray-600">Dietitian support, medical assessments, and psychological evaluation if required</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl mb-1">Treatment</h3>
                <p className="text-gray-600">Your chosen surgical or non-surgical intervention</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl mb-1">Ongoing Support</h3>
                <p className="text-gray-600">Two years of follow-up consultations, dietitian support, and access to additional services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section id="faq" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-6">Common Questions and Concerns</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I know if I'm eligible for treatment?</AccordionTrigger>
              <AccordionContent>
                Eligibility is determined through a comprehensive assessment that considers your BMI, health history, previous weight loss attempts, and overall health status. Our free 15-minute eligibility chat is a good starting point to discuss your circumstances.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What happens during the first consultation?</AccordionTrigger>
              <AccordionContent>
                During your first consultation, Dr. Niazi will review your medical history, discuss your health goals, explain treatment options, and answer your questions. This is a thorough assessment to ensure we understand your individual needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How long does the treatment process take?</AccordionTrigger>
              <AccordionContent>
                The timeline varies depending on your individual circumstances and chosen treatment. Preparation typically takes several weeks to months, followed by the treatment itself and a structured 2-year follow-up program.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Will I need to make lifestyle changes?</AccordionTrigger>
              <AccordionContent>
                Yes, lasting results require commitment to lifestyle changes including dietary modifications, regular physical activity, and ongoing engagement with our support team. We provide comprehensive support to help you make sustainable changes.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Life After Treatment */}
      <section id="life-after" className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-6">Life After Treatment</h2>
          <p className="text-lg text-blue-100 mb-8">
            Our 2-year program provides ongoing support as you adapt to your new lifestyle and achieve your health goals. We remain committed to your long-term success.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <Heart className="h-10 w-10 mb-3" />
              <h3 className="text-xl mb-2">Continued Support</h3>
              <p className="text-blue-100">Regular follow-ups with your surgeon and dietitian</p>
            </div>
            <div>
              <Smile className="h-10 w-10 mb-3" />
              <h3 className="text-xl mb-2">Improved Wellbeing</h3>
              <p className="text-blue-100">Enhanced quality of life and health outcomes</p>
            </div>
            <div>
              <Map className="h-10 w-10 mb-3" />
              <h3 className="text-xl mb-2">Lifelong Journey</h3>
              <p className="text-blue-100">Ongoing access to our care team beyond the program</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Book your free 15-minute eligibility chat today to discuss whether our program is right for you.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Book Your Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
