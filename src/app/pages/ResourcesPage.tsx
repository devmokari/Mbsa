import { Card, CardContent } from '../components/ui/card';
import { FileText, HelpCircle, BookOpen, Heart } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

export function ResourcesPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl mb-6">Resources</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Educational resources and information to support your weight management journey.
          </p>
        </div>
      </section>

      <section id="guides" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-6">Patient Information Guides</h2>
          <p className="text-lg text-gray-600 mb-8">
            Comprehensive guides to help you understand treatment options, preparation, and recovery.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Preparing for Bariatric Surgery',
              'Understanding Your Surgical Options',
              'Nutrition Guidelines Pre-Surgery',
              'Nutrition Guidelines Post-Surgery',
              'Exercise After Surgery',
              'Managing Your Recovery',
            ].map((guide, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <FileText className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="text-lg">{guide}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is bariatric surgery?</AccordionTrigger>
              <AccordionContent>
                Bariatric surgery refers to various surgical procedures designed to help with weight management. These procedures work by restricting food intake, reducing nutrient absorption, or a combination of both.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How long is the recovery period?</AccordionTrigger>
              <AccordionContent>
                Recovery time varies depending on the specific procedure and individual factors. Most patients can return to normal activities within 2-4 weeks, though full recovery may take longer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Will I need to follow a special diet?</AccordionTrigger>
              <AccordionContent>
                Yes, dietary changes are an essential part of successful weight management surgery. Our dietitian will guide you through the necessary dietary modifications before and after treatment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What support is available after surgery?</AccordionTrigger>
              <AccordionContent>
                Our 2-year program includes regular follow-up appointments with your surgeon, ongoing dietitian support, and access to psychological and exercise support when appropriate.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Can the surgery be reversed?</AccordionTrigger>
              <AccordionContent>
                Some procedures like gastric banding can be reversed, while others like gastric sleeve are permanent. This is discussed thoroughly during your consultation to ensure informed decision-making.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="articles" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-6">Articles and Insights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <BookOpen className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl mb-3">Understanding the 2-Year Program</h3>
                <p className="text-gray-600 mb-4">
                  Learn why long-term support is essential for sustainable weight management outcomes and what our structured program includes.
                </p>
                <p className="text-sm text-blue-600">Read more →</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <BookOpen className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl mb-3">Nutrition After Bariatric Surgery</h3>
                <p className="text-gray-600 mb-4">
                  Essential nutritional considerations and guidelines for successful outcomes after weight loss surgery.
                </p>
                <p className="text-sm text-blue-600">Read more →</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <BookOpen className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl mb-3">The Role of Exercise in Weight Management</h3>
                <p className="text-gray-600 mb-4">
                  How physical activity supports long-term weight management and overall health after treatment.
                </p>
                <p className="text-sm text-blue-600">Read more →</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <BookOpen className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl mb-3">Mental Health and Weight Management</h3>
                <p className="text-gray-600 mb-4">
                  Understanding the psychological aspects of weight management and the importance of mental wellbeing.
                </p>
                <p className="text-sm text-blue-600">Read more →</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="healthy-living" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-6">Healthy Living Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <Heart className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl mb-3">Meal Planning Tips</h3>
                <p className="text-gray-600">
                  Practical guidance for planning nutritious meals that support your weight management goals.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Heart className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl mb-3">Exercise Ideas</h3>
                <p className="text-gray-600">
                  Safe and effective exercise options suitable for different fitness levels and stages of recovery.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Heart className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl mb-3">Lifestyle Strategies</h3>
                <p className="text-gray-600">
                  Evidence-based strategies for developing and maintaining healthy habits for long-term success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">Need More Information?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team is here to answer your questions and provide personalized guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300123456" className="inline-block">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Call 1300 123 456
              </button>
            </a>
            <a href="mailto:info@mbsa.com.au" className="inline-block">
              <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                Email Us
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
