import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export function TreatmentOptionsPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl mb-6">Treatment Options</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            We focus on various weight management options and position surgery as one option among several.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="pathways" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
              <TabsTrigger value="pathways">Pathways</TabsTrigger>
              <TabsTrigger value="surgical">Surgical</TabsTrigger>
              <TabsTrigger value="non-surgical">Non-Surgical</TabsTrigger>
              <TabsTrigger value="assessment">Assessment</TabsTrigger>
            </TabsList>

            <TabsContent value="pathways" id="pathways">
              <h2 className="text-3xl mb-6">Weight Management Pathways</h2>
              <p className="text-lg text-gray-600 mb-8">
                Weight management is not one-size-fits-all. We offer multiple pathways tailored to individual needs and circumstances.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-3">Lifestyle Modification</h3>
                    <p className="text-gray-600">Dietary changes, exercise programs, and behavioral support.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-3">Medical Management</h3>
                    <p className="text-gray-600">Pharmacological interventions under medical supervision.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-3">Surgical Intervention</h3>
                    <p className="text-gray-600">Various bariatric surgery options for eligible patients.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="surgical" id="surgery">
              <h2 className="text-3xl mb-6">Bariatric Surgery Overview</h2>
              <p className="text-lg text-gray-600 mb-8">
                Bariatric surgery can be an effective tool for weight management when other methods have not achieved sustained results.
              </p>
              
              <div className="space-y-8">
                <div id="band">
                  <h3 className="text-2xl mb-4">Gastric Band</h3>
                  <p className="text-gray-600">An adjustable band placed around the upper stomach to create a small pouch, restricting food intake.</p>
                </div>

                <div id="bypass">
                  <h3 className="text-2xl mb-4">Gastric Bypass</h3>
                  <p className="text-gray-600">Creates a small stomach pouch and reroutes the small intestine, reducing food intake and nutrient absorption.</p>
                </div>

                <div id="sleeve">
                  <h3 className="text-2xl mb-4">Gastric Sleeve</h3>
                  <p className="text-gray-600">Removes approximately 80% of the stomach, leaving a sleeve-shaped stomach that restricts food intake.</p>
                </div>

                <div id="mini">
                  <h3 className="text-2xl mb-4">Mini Bypass</h3>
                  <p className="text-gray-600">A modified version of gastric bypass with a single connection between stomach and intestine.</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="non-surgical" id="non-surgical">
              <h2 className="text-3xl mb-6">Non-Surgical Weight Management</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-3">Lifestyle & Behavioural Changes</h3>
                    <p className="text-gray-600">
                      Comprehensive support for sustainable dietary modifications, physical activity, and behavior change strategies.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-3">Medical Treatments</h3>
                    <p className="text-gray-600">
                      Pharmacological options supervised by medical professionals to support weight management efforts.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-3">Minimally Invasive Procedures (Endoscopic)</h3>
                    <p className="text-gray-600">
                      Less invasive endoscopic procedures that may be suitable for some patients.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="assessment">
              <h2 className="text-3xl mb-6">How Treatment Options Are Assessed</h2>
              <p className="text-lg text-gray-600 mb-8">
                Treatment selection is based on comprehensive clinical assessment, patient preferences, and individual health goals.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-3">Medical Evaluation</h3>
                    <p className="text-gray-600">Review of BMI, health conditions, weight history, and overall wellbeing.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-3">Personal Goals</h3>
                    <p className="text-gray-600">Understanding your health objectives and lifestyle considerations.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Discuss Your Treatment Options
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
