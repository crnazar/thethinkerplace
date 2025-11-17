import React, { useState } from 'react';
import { Section, Card, Button } from '../components';
import { motion } from 'framer-motion';
import { Zap, Smartphone, Repeat, Map } from 'lucide-react';

export const EngineeringInPlace: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-teal-800 mb-4">
          Engaging Engineering in Place
        </h1>
        <p className="text-lg text-stone-600 max-w-3xl mx-auto">
          Learn to localize engineering design with community wisdom and youth-authored projects
        </p>
      </motion.div>

      {/* Framework */}
      <Section id="framework" title="Critical Epistemologies of Place Framework">
        <Card>
          <div className="flex items-start space-x-4 mb-6">
            <Map className="w-10 h-10 text-teal-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-lg mb-3 text-teal-800">
                Critically Engaging Engineering Through Place
              </h4>
              <p className="text-stone-700 leading-relaxed">
                This framework involves an iterative and generative process of layering community wisdom
                and knowledge onto STEM toward challenging dominant narratives, reimagining practices in place,
                and transforming the dangerous territory of STEM to make it more equitable and accessible.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 via-orange-50 to-yellow-50 p-6 rounded-lg">
            <div className="flex items-center justify-center mb-6">
              <Repeat className="w-8 h-8 text-teal-700" />
              <span className="ml-2 font-bold text-teal-900">Iterative Process</span>
            </div>
            <div className="space-y-6">
              <IterativeProcessStep
                number={1}
                title="Challenge Dominant Master Narratives"
                description="Question who is portrayed as belonging in STEM and whose knowledge counts"
                color="teal"
                examples={[
                  'Naming how science education has historically excluded certain communities',
                  'Identifying whose knowledge is valued and whose is dismissed'
                ]}
              />
              <div className="flex justify-center">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-teal-600 text-2xl"
                >
                  ↓
                </motion.div>
              </div>
              <IterativeProcessStep
                number={2}
                title="Reimagine Practices in Place"
                description="Situate engineering design within local contexts and community concerns"
                color="orange"
                examples={[
                  'Connecting engineering challenges to actual community needs',
                  'Building on place-based knowledge and practices'
                ]}
              />
              <div className="flex justify-center">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
                  className="text-orange-600 text-2xl"
                >
                  ↓
                </motion.div>
              </div>
              <IterativeProcessStep
                number={3}
                title="Transform the Dangerous Territory of STEM"
                description="Make STEM more equitable and accessible by centering community wisdom"
                color="yellow"
                examples={[
                  'Creating space for youth to claim STEM identities',
                  'Validating multiple ways of knowing in engineering'
                ]}
              />
            </div>
          </div>
        </Card>

        <Card className="mt-6 bg-teal-900 text-white">
          <h4 className="font-bold text-lg mb-3 text-yellow-300">Key Citation</h4>
          <p className="text-sm leading-relaxed mb-2">
            Nazar, C. R., Calabrese Barton, A., Morris, C., & Tan, E. (2019). Critically engaging
            engineering in place by localizing counternarratives in engineering design.{' '}
            <em>Science Education, 103</em>(3), 638-664.
          </p>
          <p className="text-xs text-teal-200 mt-3">
            This framework foregrounds the powerful and ongoing knowledge generations within, of,
            and for communities-in-place, emphasizing participatory practices and humanistic action-taking.
          </p>
        </Card>
      </Section>

      {/* Faith's Fancy Hat */}
      <Section id="faiths-hat" title="Faith's Fancy Hat: Wearable Engineering">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="flex items-start space-x-3 mb-4">
              <Zap className="w-10 h-10 text-purple-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg text-purple-900 mb-2">The Project</h4>
                <p className="text-sm text-stone-700 leading-relaxed">
                  Faith designed wearable technology including light-up jackets and solar-paneled hats.
                  Her engineering combined personal expression, functionality, and community awareness
                  about renewable energy.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg mt-4">
              <h5 className="font-semibold text-purple-800 mb-2 text-sm">Design Features:</h5>
              <ul className="space-y-2 text-sm text-stone-700">
                <li>• LED lights integrated into clothing for visibility and style</li>
                <li>• Solar panels for sustainable power source</li>
                <li>• Weather-appropriate materials</li>
                <li>• Youth fashion aesthetic</li>
              </ul>
            </div>
          </Card>

          <Card>
            <h4 className="font-bold text-lg text-teal-800 mb-3">
              Connection to Place & Community
            </h4>
            <div className="space-y-3">
              <div className="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-500">
                <p className="text-sm font-semibold text-teal-800 mb-1">Community Concern:</p>
                <p className="text-sm text-stone-700">
                  Safety for youth walking in the neighborhood, especially during winter months with early darkness
                </p>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
                <p className="text-sm font-semibold text-orange-800 mb-1">Environmental Awareness:</p>
                <p className="text-sm text-stone-700">
                  Using solar power to promote renewable energy in the community
                </p>
              </div>
              <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-500">
                <p className="text-sm font-semibold text-yellow-800 mb-1">Youth Identity:</p>
                <p className="text-sm text-stone-700">
                  Expressing personal style while solving practical problems
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="mt-6">
          <h4 className="font-bold text-lg text-teal-800 mb-3">
            Teaching Application: Integrating Wearable Engineering
          </h4>
          <WearableEngineeringLessonPlan />
        </Card>

        <div className="mt-6 p-6 bg-purple-50 border-2 border-purple-300 rounded-lg">
          <h4 className="font-bold text-lg mb-3 text-purple-900">
            Reflection: Faith's Multimodal Case
          </h4>
          <p className="text-sm text-stone-700 mb-3">
            Faith created a multimodal case study titled "faiTh'S fancy haT" that was published in the book
            <em> Reframing Science Teaching and Learning: Students and Educators Co-Developing Science Practices
            In and Out of School</em> (Stroupe, 2017).
          </p>
          <p className="text-sm text-stone-700">
            Her case helped preservice teachers understand how engineering can be a vehicle for youth to
            connect personal identity, community concerns, and STEM learning.
          </p>
        </div>
      </Section>

      {/* Christopher's Anti-Bullying App */}
      <Section id="christophers-app" title="Christopher's Anti-Bullying App">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50">
            <div className="flex items-start space-x-3 mb-4">
              <Smartphone className="w-10 h-10 text-blue-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg text-blue-900 mb-2">The Project</h4>
                <p className="text-sm text-stone-700 leading-relaxed">
                  Unlike other youth working on physical wearable designs, Christopher focused on digital
                  engineering solutions. He developed an app concept to gather and share local information
                  on bullying, connecting users to important people like parents or police.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg mt-4">
              <h5 className="font-semibold text-blue-800 mb-2 text-sm">App Features:</h5>
              <ul className="space-y-2 text-sm text-stone-700">
                <li>• Report bullying incidents anonymously</li>
                <li>• Connect to trusted adults and authorities</li>
                <li>• Share local bullying prevention resources</li>
                <li>• Build community awareness and response</li>
              </ul>
            </div>
          </Card>

          <Card>
            <h4 className="font-bold text-lg text-teal-800 mb-3">
              Engineering as Social Justice
            </h4>
            <div className="space-y-4">
              <p className="text-sm text-stone-700 leading-relaxed">
                Christopher's project demonstrates how engineering can directly address social issues
                affecting youth communities. His design process centered:
              </p>
              <ul className="space-y-2 text-sm text-stone-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2 font-bold">→</span>
                  <span><strong>Community knowledge</strong> of bullying patterns and needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2 font-bold">→</span>
                  <span><strong>Youth expertise</strong> on what would actually help their peers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2 font-bold">→</span>
                  <span><strong>Digital engineering</strong> as a legitimate form of making</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2 font-bold">→</span>
                  <span><strong>Action-oriented solutions</strong> to immediate community concerns</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>

        <Card className="mt-6 bg-gradient-to-r from-blue-50 to-teal-50">
          <h4 className="font-bold text-lg text-teal-800 mb-4">
            Pedagogical Approach: Supporting Youth-Led Digital Design
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-blue-800 mb-2">Teacher Moves That Supported Christopher:</h5>
              <ul className="space-y-2 text-sm text-stone-700">
                <li>✓ Validated digital design as engineering</li>
                <li>✓ Connected him with app development resources</li>
                <li>✓ Positioned him as expert on bullying solutions</li>
                <li>✓ Created space for social justice through STEM</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-orange-800 mb-2">What to Avoid:</h5>
              <ul className="space-y-2 text-sm text-stone-700">
                <li>✗ Dismissing digital work as "not real engineering"</li>
                <li>✗ Requiring physical prototypes only</li>
                <li>✗ Separating social concerns from engineering</li>
                <li>✗ Focusing only on technical skills without purpose</li>
              </ul>
            </div>
          </div>
        </Card>

        <InteractiveAppDesigner />
      </Section>

      {/* Localizing Counternarratives */}
      <Section id="localizing-counternarratives" title="Localizing Counternarratives in Design">
        <Card>
          <h4 className="font-bold text-lg text-teal-800 mb-4">
            How Youth Layer Community Knowledge onto Engineering
          </h4>
          <p className="text-stone-700 leading-relaxed mb-6">
            The longitudinal study (2013-2018) examined how youth like AD, Faith, and Christopher engaged
            in engineering design in collaboration with community members, continuously layering local
            knowledge onto engineering practices.
          </p>

          <div className="space-y-6">
            <LayeringExample
              layer="Community Wisdom"
              description="Understanding local concerns, resources, and aspirations"
              example="Youth identified that people in their neighborhood worry about safety, energy costs, and staying connected"
            />
            <LayeringExample
              layer="Place-Based Knowledge"
              description="Specific environmental and social context"
              example="Knowledge of walking routes, weather patterns, community gathering spaces, local support systems"
            />
            <LayeringExample
              layer="Engineering Design"
              description="Technical solutions rooted in community context"
              example="Wearable solar tech for safety and sustainability; digital apps connecting community resources"
            />
            <LayeringExample
              layer="Transformed Outcomes"
              description="Engineering that serves and empowers the community"
              example="Youth-designed solutions that address real needs and position youth as community problem-solvers"
            />
          </div>
        </Card>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Card className="bg-red-50 border-2 border-red-300">
            <h4 className="font-bold text-lg text-red-900 mb-3">
              Traditional Engineering Curriculum
            </h4>
            <ul className="space-y-2 text-sm text-stone-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✗</span>
                <span>Generic problems disconnected from students' lives</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✗</span>
                <span>One "correct" engineering process</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✗</span>
                <span>Teacher-defined problems and constraints</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✗</span>
                <span>Focus on individual competition</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✗</span>
                <span>Community knowledge seen as irrelevant</span>
              </li>
            </ul>
          </Card>

          <Card className="bg-green-50 border-2 border-green-300">
            <h4 className="font-bold text-lg text-green-900 mb-3">
              Place-Based Engineering Approach
            </h4>
            <ul className="space-y-2 text-sm text-stone-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Problems identified by youth and community</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Multiple valid engineering approaches</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Youth and community co-define challenges</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Collaborative community impact</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Community knowledge as engineering resource</span>
              </li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Place-Based Project Builder */}
      <Section id="project-builder" title="Design Your Own Place-Based Engineering Unit">
        <PlaceBasedProjectBuilder />
      </Section>
    </div>
  );
};

// Supporting Components

const IterativeProcessStep: React.FC<{
  number: number;
  title: string;
  description: string;
  color: 'teal' | 'orange' | 'yellow';
  examples: string[];
}> = ({ number, title, description, color, examples }) => {
  const colors = {
    teal: 'bg-teal-500 border-teal-500 text-teal-800',
    orange: 'bg-orange-500 border-orange-500 text-orange-800',
    yellow: 'bg-yellow-500 border-yellow-500 text-yellow-800',
  };

  return (
    <div className={`bg-white p-5 rounded-lg border-l-4 ${colors[color]}`}>
      <div className="flex items-start space-x-3">
        <div className={`${colors[color].split(' ')[0]} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}>
          {number}
        </div>
        <div className="flex-1">
          <h5 className={`font-bold text-lg mb-2 ${colors[color].split(' ')[2]}`}>{title}</h5>
          <p className="text-sm text-stone-700 mb-3">{description}</p>
          <div className="bg-stone-50 p-3 rounded">
            <p className="text-xs font-semibold text-stone-600 mb-1">Examples:</p>
            <ul className="space-y-1">
              {examples.map((ex, i) => (
                <li key={i} className="text-xs text-stone-700">• {ex}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const WearableEngineeringLessonPlan: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-lg">
      <h5 className="font-bold text-purple-900 mb-4">Sample Unit Plan: Community-Connected Wearables</h5>
      <div className="space-y-3">
        {[
          { week: 'Week 1', focus: 'Community Ethnography', activity: 'Students interview family and community members about safety, weather, energy use' },
          { week: 'Week 2', focus: 'Problem Definition', activity: 'Students identify community concerns that wearable tech could address' },
          { week: 'Week 3', focus: 'Research & Ideation', activity: 'Explore existing wearable tech; sketch initial designs rooted in community needs' },
          { week: 'Week 4', focus: 'Prototyping', activity: 'Build prototypes using LEDs, solar panels, fabrics, sensors' },
          { week: 'Week 5', focus: 'Community Testing', activity: 'Get feedback from community members; iterate designs' },
          { week: 'Week 6', focus: 'Presentation', activity: 'Present solutions to community, explaining engineering and community connections' },
        ].map((phase, i) => (
          <div key={i} className="bg-white p-3 rounded flex items-start space-x-3">
            <div className="bg-purple-600 text-white px-3 py-1 rounded font-bold text-sm flex-shrink-0">
              {phase.week}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-purple-800 text-sm">{phase.focus}</p>
              <p className="text-xs text-stone-700 mt-1">{phase.activity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const InteractiveAppDesigner: React.FC = () => {
  const [problemArea, setProblemArea] = useState('');

  return (
    <Card className="mt-6 bg-gradient-to-r from-cyan-50 to-blue-50">
      <h4 className="font-bold text-lg text-blue-900 mb-3">
        Interactive: Design Your Own Community App
      </h4>
      <p className="text-sm text-stone-700 mb-4">
        Following Christopher's example, identify a community concern and sketch an app solution:
      </p>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-stone-700 mb-2">
            What community concern would your app address?
          </label>
          <select
            value={problemArea}
            onChange={(e) => setProblemArea(e.target.value)}
            className="w-full p-3 border-2 border-blue-300 rounded-lg focus:border-blue-500 focus:outline-none"
          >
            <option value="">Select a concern...</option>
            <option value="safety">Community Safety & Connection</option>
            <option value="environment">Environmental Issues</option>
            <option value="health">Health & Wellness</option>
            <option value="education">Educational Resources</option>
            <option value="other">Other Community Need</option>
          </select>
        </div>

        {problemArea && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-4 rounded-lg border-2 border-blue-300"
          >
            <h5 className="font-semibold text-blue-800 mb-2">Consider These Questions:</h5>
            <ul className="space-y-2 text-sm text-stone-700">
              <li>• Who in your community experiences this concern most?</li>
              <li>• What community knowledge exists about this issue?</li>
              <li>• How would your app connect people to resources or each other?</li>
              <li>• What would make this app trustworthy for youth to use?</li>
            </ul>
          </motion.div>
        )}
      </div>
    </Card>
  );
};

const LayeringExample: React.FC<{
  layer: string;
  description: string;
  example: string;
}> = ({ layer, description, example }) => {
  return (
    <div className="relative pl-16">
      <div className="absolute left-0 top-0 bg-gradient-to-r from-teal-600 to-orange-600 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold transform rotate-12">
        +
      </div>
      <div className="bg-white p-4 rounded-lg shadow border-l-4 border-teal-500">
        <h5 className="font-bold text-teal-800 text-sm mb-1">{layer}</h5>
        <p className="text-sm text-stone-600 mb-2">{description}</p>
        <div className="bg-teal-50 p-2 rounded text-xs text-stone-700 italic">
          Example: {example}
        </div>
      </div>
    </div>
  );
};

const PlaceBasedProjectBuilder: React.FC = () => {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: 'Identify Community Concerns',
      prompt: 'What issues matter to your students and their community?',
      tips: ['Conduct community walks', 'Interview family members', 'Review local news', 'Listen to student conversations']
    },
    {
      title: 'Connect to Engineering',
      prompt: 'How could engineering address these concerns?',
      tips: ['Consider multiple engineering disciplines', 'Think beyond physical products', 'Include digital and social solutions']
    },
    {
      title: 'Layer Community Knowledge',
      prompt: 'What do community members already know about this issue?',
      tips: ['Document local expertise', 'Validate cultural practices', 'Build on existing solutions']
    },
    {
      title: 'Design with Youth',
      prompt: 'How will youth co-create the engineering solutions?',
      tips: ['Youth define problems', 'Youth lead design decisions', 'Youth evaluate success criteria']
    },
  ];

  return (
    <Card className="bg-gradient-to-r from-green-50 to-teal-50">
      <h4 className="font-bold text-lg text-teal-900 mb-4">
        Place-Based Engineering Unit Planning Template
      </h4>

      <div className="mb-6">
        <div className="flex justify-between mb-2">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-2 mx-1 rounded ${
                i <= step ? 'bg-teal-600' : 'bg-stone-200'
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-stone-600">Step {step + 1} of {steps.length}</p>
      </div>

      <div className="bg-white p-5 rounded-lg mb-4">
        <h5 className="font-bold text-teal-800 text-lg mb-2">{steps[step].title}</h5>
        <p className="text-stone-700 mb-4">{steps[step].prompt}</p>
        <div className="bg-teal-50 p-3 rounded">
          <p className="text-sm font-semibold text-teal-800 mb-2">Tips:</p>
          <ul className="space-y-1">
            {steps[step].tips.map((tip, i) => (
              <li key={i} className="text-sm text-stone-700">• {tip}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-between">
        <Button
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
          variant="outline"
        >
          Previous
        </Button>
        <Button
          onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
          disabled={step === steps.length - 1}
        >
          Next Step
        </Button>
      </div>

      {step === steps.length - 1 && (
        <div className="mt-6 p-4 bg-green-100 border-2 border-green-400 rounded-lg">
          <p className="text-sm text-green-900 font-semibold">
            ✓ Ready to implement! Remember to document youth voices and community knowledge throughout the process.
          </p>
        </div>
      )}
    </Card>
  );
};
