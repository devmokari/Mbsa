import { Card, CardContent } from '../components/ui/card';
import { DollarSign, FileText, CreditCard, HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export function CostsPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl mb-6">Costs and Process</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Transparent information about consultations, program inclusions, fees, and payment options to reduce uncertainty.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-6">How Consultations Work</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl mb-3">Step 1: Free 15-Minute Chat</h3>
                <p className="text-gray-600 mb-3">
                  No-obligation phone consultation to discuss program suitability
                </p>
                <p className="text-lg font-semibold text-blue-600">Free of charge</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl mb-3">Step 2: Formal Consultation</h3>
                <p className="text-gray-600 mb-3">
                  Comprehensive assessment with Dr Niazi (typically 45-60 minutes)
                </p>
                <p className="text-lg font-semibold text-blue-600">Standard consultation fee applies</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-6">Program Inclusions</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our 2-year program includes comprehensive support services designed to optimize your outcomes.
          </p>
          <div className="space-y-4">
            {[
              'Two years of follow-up consultations with your surgeon (bulk billed where applicable)',
              'In-house dietitian support before and after treatment',
              'Access to psychological support when clinically appropriate',
              'Coordination of care between all team members',
              'Educational resources and materials',
              'Ongoing access to your care team',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                  ✓
                </div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-6">Fees and Payment Pathways</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <CreditCard className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl mb-3">Treatment Costs</h3>
                <p className="text-gray-600 mb-4">
                  Costs vary depending on the specific treatment or surgery required and individual circumstances.
                </p>
                <p className="text-sm text-gray-500">
                  Detailed cost information provided during consultation
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <DollarSign className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl mb-3">Payment Options</h3>
                <p className="text-gray-600 mb-4">
                  Various payment options may be available including payment plans and medical financing.
                </p>
                <p className="text-sm text-gray-500">
                  Discuss payment options during your consultation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-6">Medicare and Bulk Billing</h2>
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl mb-4">Medicare Rebates</h3>
              <p className="text-gray-600 mb-6">
                Medicare rebates may be available for eligible patients who meet specific criteria. We can provide information about potential Medicare benefits during your consultation.
              </p>
              <h3 className="text-xl mb-4">Bulk Billed Follow-Up</h3>
              <p className="text-gray-600">
                Follow-up consultations within our 2-year program are bulk billed where applicable, meaning no out-of-pocket costs for eligible Medicare patients for these appointments.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-6">Frequently Asked Questions About Costs</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What does the initial consultation cost?</AccordionTrigger>
              <AccordionContent>
                The initial 15-minute eligibility chat is free. The formal consultation with Dr Niazi incurs a standard consultation fee. Specific fee information is provided when booking your appointment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Are follow-up appointments included?</AccordionTrigger>
              <AccordionContent>
                Yes, two years of follow-up consultations with your surgeon are included in our program and are bulk billed where applicable for eligible Medicare patients.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I use private health insurance?</AccordionTrigger>
              <AccordionContent>
                Private health insurance may cover some or all of the treatment costs depending on your level of cover. We recommend checking with your insurer about your specific coverage.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Are payment plans available?</AccordionTrigger>
              <AccordionContent>
                Payment plans and medical financing options may be available. We can discuss these options during your consultation to find a suitable arrangement.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">Next Steps</h2>
          <p className="text-lg text-blue-100 mb-8">
            Book your free 15-minute eligibility chat to discuss your circumstances and receive personalized information about costs and your treatment pathway.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Book Your Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
