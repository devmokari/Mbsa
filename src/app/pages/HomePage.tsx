import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Heart, Users, Calendar, Award, Phone, ExternalLink, Stethoscope, Pill, Salad } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import programBanner from '../../assets/images/our-program-banner.jpg';
import teamImage from '../../assets/images/team.png';

export function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={programBanner}
            alt="Doctor speaking with a patient during consultation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 via-blue-900/70 to-blue-700/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-sm px-3 py-1 rounded-full backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              <span className="font-semibold">MBSA Program</span>
            </div>
            <h1 className="text-4xl lg:text-5xl leading-tight">
              Individualised Weight Management Care
            </h1>
            <p className="text-xl text-blue-100">
              Surgical and non-surgical weight management with long-term support
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  Book a Consultation
                </Button>
              </Link>
              <Link to="/our-program">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  Explore Our Program
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl lg:text-4xl">Your journey starts with a conversation</h2>
            <p className="text-lg text-gray-700">
              Dr. Niazi will work with you to explore all your options from weight-loss surgery to non-surgical treatments to find the approach that’s right for you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <Card className="border-2 border-gray-100 hover:border-blue-600 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Stethoscope className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Bariatric Surgery</h3>
                <p className="text-gray-600">Consultations and procedures tailored to your health goals.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-gray-100 hover:border-blue-600 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Pill className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Weight Loss Medications</h3>
                <p className="text-gray-600">Medical treatments when appropriate, guided by clinical assessment.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-gray-100 hover:border-blue-600 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Salad className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Lifestyle & Nutrition Plans</h3>
                <p className="text-gray-600">Structured support for sustainable habits, nutrition, and movement.</p>
              </CardContent>
            </Card>
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
              A two-year care program designed to support you every step of the way.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-blue-600 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl mb-2">Personalised Care Plans</h3>
                <p className="text-gray-600">
                  Personalised Care Plans
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
                  In House Dietitian Support
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
                  Two Years Surgeon Follow Up
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <Card className="border-2 hover:border-blue-600 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl mb-2">Psychological Support</h3>
                <p className="text-gray-600">
                  Regular follow ups at no cost
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
                  Psychological Support Access
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
                  Personal Training options
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-blue-600 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl mb-2">Ongoing lifetime Support</h3>
                <p className="text-gray-600">
                  Continued access to guidance and care beyond the initial program.
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
                src={teamImage}
                alt="Smiling clinical care team"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl mb-6">
                A Coordinated Team Around You
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                A multidisciplinary team focused on consistent, structured care before, during, and after treatment.
              </p>
              <div className="grid gap-4 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Primary Care Team</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><span className="font-semibold">Dr Mani Niazi</span> — Upper Gastrointestinal and Bariatric Surgeon. Over 25 years of experience providing ongoing surgical care from consultation through long-term follow up.</li>
                    <li><span className="font-semibold">Dr Ramin Mehdipour</span> — Bariatric Surgeon supporting a consistent and structured patient experience.</li>
                    <li><span className="font-semibold">Tara Zavabeti</span> — Senior Dietitian offering tailored nutrition guidance before and after treatment.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Extended Care Team</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Dr Kristine Moser — Senior Specialist Anaesthetist</li>
                    <li>Ms Mary Botros — Psychologist</li>
                    <li>Dr Soleiman Kashkooli — Senior Specialist Gastroenterologist</li>
                    <li>Daniela Bonaddio — Registered Nurse and Personal Trainer</li>
                  </ul>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <p className="text-gray-500">Video: Dr Niazi explaining treatment options</p>
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
              Ready to Take the Next Step?
            </h2>
            <p className="text-xl text-blue-100">
              Begin with a no obligation 15-minute call to find out if you’re eligible and our program is right for you. If appropriate, you can then proceed to a formal consultation with Dr Niazi to discuss suitable treatment options.
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
                  Speak with our team for a no-obligation call to discuss eligibility and whether our care pathways fit your needs.
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
                  If appropriate, proceed to a formal consultation with Dr Niazi to confirm the surgical or non-surgical plan that suits your goals.
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
