import React, { useState } from 'react';
import { Section, Card, GlossaryTooltip } from '../components';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Video, BookOpen, GraduationCap } from 'lucide-react';

export const YouthAsEducators: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-teal-800 mb-4">
          Youth as Teacher Educators
        </h1>
        <p className="text-lg text-stone-600 max-w-3xl mx-auto">
          Deep dive into Dr. Christina Restrepo Nazar's award-winning research on how youth knowledge transforms preservice teacher education
        </p>
      </motion.div>

      {/* Research Overview */}
      <Section id="research-overview" title="Overview of the Research">
        <Card className="bg-gradient-to-r from-yellow-50 to-orange-50">
          <div className="flex items-start space-x-4 mb-4">
            <Award className="w-12 h-12 text-yellow-600 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-teal-800 mb-2">
                Youth as Teacher Educators: Supporting Preservice Teachers in Developing Youth-Centered, Equity-Oriented Science Teaching Practices
              </h3>
              <p className="text-sm text-stone-600">
                Christina Restrepo Nazar | Ph.D. Dissertation, Michigan State University | 2018
              </p>
              <div className="mt-3 inline-block bg-yellow-200 px-3 py-1 rounded-full">
                <p className="text-sm font-bold text-yellow-900">
                  🏆 2020 AACTE Outstanding Dissertation Award Winner
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <Card className="bg-teal-50">
            <div className="text-center">
              <div className="bg-teal-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h4 className="font-bold text-teal-800 mb-2">Study One</h4>
              <p className="text-sm text-stone-700">
                Youth Counternarratives of the Culture of Power in Science
              </p>
            </div>
          </Card>
          <Card className="bg-orange-50">
            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h4 className="font-bold text-orange-800 mb-2">Study Two</h4>
              <p className="text-sm text-stone-700">
                17 PSTs' Development of Teaching Imaginaries (Fall 2017)
              </p>
            </div>
          </Card>
          <Card className="bg-yellow-50">
            <div className="text-center">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h4 className="font-bold text-yellow-800 mb-2">Study Three</h4>
              <p className="text-sm text-stone-700">
                3 PSTs' Classroom Enactments at Liberty Spanish Immersion School
              </p>
            </div>
          </Card>
        </div>

        <Card className="mt-6">
          <h4 className="font-bold text-lg mb-3 text-teal-800">Methodology: Social Design Experiment</h4>
          <p className="text-stone-700 leading-relaxed mb-4">
            This research used a{' '}
            <GlossaryTooltip term="Social Design Experiments">
              social design experiment
            </GlossaryTooltip>{' '}
            methodology—organized around transforming educational and social circumstances
            of members of non-dominant communities as a means of promoting social equity and learning.
          </p>
          <div className="bg-teal-50 p-4 rounded-lg">
            <p className="text-sm font-semibold text-teal-900 mb-2">Research Setting:</p>
            <p className="text-sm text-stone-700">
              Great Lakes City Community Center after-school green energy program (December 2013 - May 2018),
              where youth engaged in science and engineering projects addressing community concerns.
            </p>
          </div>
        </Card>
      </Section>

      {/* Study One: Youth Counternarratives */}
      <Section id="youth-counternarratives" title="Study One: Youth Counternarratives">
        <Card>
          <div className="flex items-start space-x-4 mb-4">
            <BookOpen className="w-10 h-10 text-teal-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-lg mb-3 text-teal-800">
                How Science Education Marginalizes Youth Experiences
              </h4>
              <p className="text-stone-700 leading-relaxed">
                This study documented how science education legitimizes certain ways of knowing and being
                that marginalize youth experiences, particularly for youth from non-dominant communities.
                It foregrounds{' '}
                <GlossaryTooltip term="Counternarratives">youth counternarratives</GlossaryTooltip>{' '}
                of the <GlossaryTooltip term="Culture of Power">culture of power</GlossaryTooltip> in science.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h5 className="font-bold text-red-800 mb-2">What Youth Identified:</h5>
              <ul className="space-y-2 text-sm text-stone-700">
                <li>• Science class feels disconnected from their lives</li>
                <li>• Teachers dismiss their questions and ideas</li>
                <li>• Only certain students are seen as "science people"</li>
                <li>• Family knowledge isn't valued in school science</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-green-800 mb-2">Youth Resistance Strategies:</h5>
              <ul className="space-y-2 text-sm text-stone-700">
                <li>• Creating their own science investigations</li>
                <li>• Connecting science to community issues</li>
                <li>• Building on family and cultural knowledge</li>
                <li>• Claiming identity as scientists and engineers</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="mt-6 bg-teal-900 text-white">
          <h4 className="font-bold text-lg mb-3 text-yellow-300">Youth Voice: From the Research</h4>
          <div className="space-y-4">
            <div className="bg-teal-800 p-4 rounded-lg">
              <p className="text-sm italic mb-2">
                "They [teachers] think we can't do the hard stuff, so they give us baby work.
                But outside of school, we're solving real problems in our neighborhood."
              </p>
              <p className="text-xs text-teal-200">— Youth participant, discussing school science experiences</p>
            </div>
            <div className="bg-teal-800 p-4 rounded-lg">
              <p className="text-sm italic mb-2">
                "My grandma knows more about plants than my biology teacher, but when I talk
                about what she taught me, it's like it doesn't count as science."
              </p>
              <p className="text-xs text-teal-200">— Youth participant on family knowledge</p>
            </div>
          </div>
        </Card>
      </Section>

      {/* Study Two: Teaching Imaginaries */}
      <Section id="teaching-imaginaries" title="Study Two: Developing Teaching Imaginaries">
        <Card>
          <h4 className="font-bold text-lg mb-3 text-teal-800">
            <GlossaryTooltip term="Teaching Imaginaries">Teaching Imaginaries</GlossaryTooltip> as Practice
          </h4>
          <p className="text-stone-700 leading-relaxed mb-4">
            This study traced how seventeen elementary science methods students developed their
            teaching imaginaries—their visions of what teaching can and should look like—during
            Fall 2017 through engagement with youth-created multimodal cases.
          </p>

          <TeachingImaginaryTimeline />
        </Card>

        <Card className="mt-6">
          <h4 className="font-bold text-lg mb-3 text-teal-800">What PSTs Learned from Youth</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-teal-700 mb-3">Before Engaging with Youth Cases:</h5>
              <ul className="space-y-2 text-sm text-stone-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">→</span>
                  <span>Focus on covering content standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">→</span>
                  <span>View students as lacking background knowledge</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">→</span>
                  <span>Imagine teaching as transmitting information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">→</span>
                  <span>Separate science from students' lives</span>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-green-700 mb-3">After Engaging with Youth Cases:</h5>
              <ul className="space-y-2 text-sm text-stone-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">→</span>
                  <span>Center youth knowledge and questions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">→</span>
                  <span>Build on students' cultural and community practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">→</span>
                  <span>Co-create curriculum with students</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">→</span>
                  <span>Connect science to community concerns</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <div className="mt-6">
          <TeachingScenarioInteractive />
        </div>
      </Section>

      {/* Study Three: Enactments in Practice */}
      <Section id="classroom-enactments" title="Study Three: Enactments in Practice">
        <Card className="bg-gradient-to-r from-teal-50 to-blue-50">
          <h4 className="font-bold text-lg mb-3 text-teal-800">
            Six-Week Engineering Unit at Liberty Spanish Immersion School
          </h4>
          <p className="text-stone-700 leading-relaxed mb-4">
            This study followed three preservice teachers as they enacted equity-oriented practices
            during a six-week engineering unit in Great Lakes City, Michigan. It examined how PSTs
            translated their teaching imaginaries into actual classroom practice.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-3 rounded-lg">
              <p className="text-sm font-bold text-teal-800">Setting:</p>
              <p className="text-sm text-stone-700">Liberty Spanish Immersion School</p>
            </div>
            <div className="bg-white p-3 rounded-lg">
              <p className="text-sm font-bold text-orange-800">Duration:</p>
              <p className="text-sm text-stone-700">6-week engineering unit</p>
            </div>
            <div className="bg-white p-3 rounded-lg">
              <p className="text-sm font-bold text-yellow-800">Participants:</p>
              <p className="text-sm text-stone-700">3 preservice teachers</p>
            </div>
          </div>
        </Card>

        <Card className="mt-6">
          <h4 className="font-bold text-lg mb-3 text-teal-800">Equity-Oriented Teaching Moves Observed</h4>
          <div className="space-y-4">
            <EquityMoveCard
              title="Elevating Youth Expertise"
              description="PSTs positioned students as experts on their communities and invited them to lead investigations"
              example="A PST asked students to map community resources and identify problems they wanted to solve through engineering"
            />
            <EquityMoveCard
              title="Validating Multiple Ways of Knowing"
              description="PSTs explicitly connected family and cultural knowledge to engineering concepts"
              example="When discussing sustainable design, a PST invited students to share how their families conserve resources at home"
            />
            <EquityMoveCard
              title="Coplanning with Students"
              description="PSTs adjusted lessons based on student interests and questions rather than sticking rigidly to pre-planned curriculum"
              example="After students expressed interest in renewable energy, the PST reorganized the unit to focus on solar and wind power solutions for their neighborhood"
            />
          </div>
        </Card>
      </Section>

      {/* Youth-Created Multimodal Cases */}
      <Section id="multimodal-cases" title="Youth-Created Multimodal Cases">
        <Card>
          <div className="flex items-start space-x-4 mb-4">
            <Video className="w-10 h-10 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-lg mb-3 text-teal-800">
                How Youth Became Teacher Educators
              </h4>
              <p className="text-stone-700 leading-relaxed">
                Youth co-created multimodal case studies using videos, audio recordings, and other
                online resources to discuss family, home, and school knowledge; practices and experiences
                relating to science identities and agency; and creating inventions to solve important community issues.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <YouthCaseCard
              name="Faith"
              project="Faith's Fancy Hat - Wearable Engineering"
              description="Faith designed light-up jackets and solar-paneled hats, documenting her engineering process and explaining how her designs addressed community needs."
              impact="Her multimodal case helped PSTs understand how youth connect engineering to personal expression and community concerns."
            />
            <YouthCaseCard
              name="Christopher"
              project="Anti-Bullying App"
              description="Christopher developed an app concept to gather and share local information on bullying, connecting users to important people like parents or police."
              impact="His case showed PSTs that engineering isn't just physical artifacts—it can be digital solutions addressing social issues."
            />
            <YouthCaseCard
              name="AD"
              project="Community Energy Solutions"
              description="AD worked on engineering designs addressing energy efficiency in their neighborhood, analyzing the intersection of science and community needs."
              impact="AD's case demonstrated how engineering can directly respond to local environmental concerns."
            />
          </div>
        </Card>

        <div className="mt-6 p-6 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
          <h4 className="font-bold text-lg mb-3 text-yellow-900 flex items-center">
            <GraduationCap className="w-6 h-6 mr-2" />
            Reflection Prompt
          </h4>
          <p className="text-stone-700 mb-3 font-medium">
            How might you create opportunities for your students to become teacher educators?
          </p>
          <p className="text-sm text-stone-600 mb-3">Consider:</p>
          <ul className="space-y-2 text-sm text-stone-700">
            <li>• What knowledge and experiences do your students have that could teach others?</li>
            <li>• How could you document and share student work as teaching resources?</li>
            <li>• Who might benefit from learning from your students (other students, teachers, community members)?</li>
          </ul>
        </div>
      </Section>
    </div>
  );
};

// Component for Teaching Imaginary Timeline
const TeachingImaginaryTimeline: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-teal-200" />
      <div className="space-y-6">
        {[
          { week: 'Week 1-2', title: 'Initial Exposure', desc: 'PSTs viewed youth multimodal cases showing community-connected science' },
          { week: 'Week 3-5', title: 'Questioning Assumptions', desc: 'PSTs began questioning deficit views and exploring asset-based approaches' },
          { week: 'Week 6-8', title: 'Imagining Possibilities', desc: 'PSTs envisioned lessons that center youth knowledge and community concerns' },
          { week: 'Week 9-12', title: 'Developing Practice', desc: 'PSTs designed and discussed lesson plans incorporating youth-centered principles' },
        ].map((phase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-20"
          >
            <div className="absolute left-4 w-9 h-9 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              {index + 1}
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-xs font-bold text-teal-700 mb-1">{phase.week}</p>
              <h5 className="font-bold text-teal-800 mb-1">{phase.title}</h5>
              <p className="text-sm text-stone-700">{phase.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Interactive Teaching Scenario Component
const TeachingScenarioInteractive: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const scenario = {
    situation: "A student shares that their grandmother uses special plants from their home country to treat illnesses. You're teaching a unit on body systems.",
    options: [
      {
        text: "Thank them for sharing and redirect to the textbook content on medicines",
        feedback: "This dismisses valuable family knowledge. Consider how this reinforces the culture of power in science.",
        isEquitable: false,
      },
      {
        text: "Invite the student to bring in the plants and investigate their properties as part of the unit",
        feedback: "Excellent! This validates family knowledge and positions it as legitimate scientific investigation.",
        isEquitable: true,
      },
      {
        text: "Note it as interesting cultural information and move on with the lesson",
        feedback: "While polite, this treats cultural knowledge as supplementary rather than central to science learning.",
        isEquitable: false,
      },
      {
        text: "Co-plan with students to investigate how different cultures approach health and medicine",
        feedback: "Outstanding! This centers multiple epistemologies and transforms the curriculum.",
        isEquitable: true,
      },
    ],
  };

  return (
    <Card className="bg-gradient-to-r from-purple-50 to-pink-50">
      <h4 className="font-bold text-lg mb-3 text-purple-900">
        Interactive Scenario: How Would You Respond?
      </h4>
      <div className="bg-white p-4 rounded-lg mb-4">
        <p className="text-stone-800 font-medium">{scenario.situation}</p>
      </div>
      <div className="space-y-3">
        {scenario.options.map((option, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.01 }}
            onClick={() => setSelectedOption(index)}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
              selectedOption === index
                ? option.isEquitable
                  ? 'border-green-500 bg-green-50'
                  : 'border-orange-500 bg-orange-50'
                : 'border-stone-200 bg-white hover:border-purple-300'
            }`}
          >
            <p className="text-sm font-medium text-stone-800 mb-2">{option.text}</p>
            <AnimatePresence>
              {selectedOption === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-3 pt-3 border-t border-stone-200"
                >
                  <p className={`text-sm ${option.isEquitable ? 'text-green-700' : 'text-orange-700'}`}>
                    {option.isEquitable ? '✓ ' : '⚠ '}
                    {option.feedback}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};

// Equity Move Card Component
const EquityMoveCard: React.FC<{ title: string; description: string; example: string }> = ({
  title,
  description,
  example,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-gradient-to-r from-teal-50 to-blue-50 p-4 rounded-lg border-l-4 border-teal-500 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ scale: 1.01 }}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h5 className="font-bold text-teal-800 mb-2">{title}</h5>
          <p className="text-sm text-stone-700">{description}</p>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          className="ml-3 text-teal-600"
        >
          ▼
        </motion.div>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 pt-3 border-t border-teal-200"
          >
            <p className="text-sm font-semibold text-teal-700 mb-1">Example from Practice:</p>
            <p className="text-sm text-stone-700 italic">"{example}"</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Youth Case Card Component
const YouthCaseCard: React.FC<{
  name: string;
  project: string;
  description: string;
  impact: string;
}> = ({ name, project, description, impact }) => {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-5 rounded-lg border-2 border-orange-200">
      <div className="flex items-start space-x-4">
        <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
          {name[0]}
        </div>
        <div className="flex-1">
          <h5 className="font-bold text-orange-900 text-lg mb-1">{name}</h5>
          <p className="text-sm font-semibold text-orange-700 mb-2">{project}</p>
          <p className="text-sm text-stone-700 mb-3">{description}</p>
          <div className="bg-white p-3 rounded border-l-4 border-green-500">
            <p className="text-xs font-semibold text-green-800 mb-1">Impact on PSTs:</p>
            <p className="text-xs text-stone-700">{impact}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
