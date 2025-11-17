import React, { useState } from 'react';
import { Section, Card, GlossaryTooltip } from '../components';
import { motion } from 'framer-motion';
import { Users, Search, Repeat, FileText, Network, Target } from 'lucide-react';

export const PracticeBasedApproaches: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-teal-800 mb-4">
          Practice-Based Approaches
        </h1>
        <p className="text-lg text-stone-600 max-w-3xl mx-auto">
          Concrete pedagogical tools and methodologies for equity-oriented STEM teaching
        </p>
      </motion.div>

      {/* Social Design Experiments */}
      <Section id="social-design" title="Social Design Experiments">
        <Card>
          <div className="flex items-start space-x-4 mb-4">
            <Repeat className="w-10 h-10 text-teal-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-lg mb-3 text-teal-800">What Are Social Design Experiments?</h4>
              <p className="text-stone-700 leading-relaxed mb-4">
                <GlossaryTooltip term="Social Design Experiments">Social design experiments</GlossaryTooltip>{' '}
                are a research and teaching methodology organized around transforming educational and social
                circumstances of members of non-dominant communities as a means of promoting social equity and learning.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-teal-50 p-4 rounded-lg">
              <h5 className="font-bold text-teal-800 mb-2">Goal</h5>
              <p className="text-sm text-stone-700">
                Ameliorate historical injustices and develop theories focused on equitable learning opportunities
              </p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h5 className="font-bold text-orange-800 mb-2">Focus</h5>
              <p className="text-sm text-stone-700">
                Structural, systemic injustices experienced as unjust by non-dominant communities
              </p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h5 className="font-bold text-yellow-800 mb-2">Approach</h5>
              <p className="text-sm text-stone-700">
                Collaborate with communities to transform circumstances while generating knowledge
              </p>
            </div>
          </div>
        </Card>

        <Card className="mt-6">
          <h4 className="font-bold text-lg text-teal-800 mb-4">Checklist: Is This a Social Design Experiment?</h4>
          <div className="space-y-3">
            {[
              'Centers on transforming unjust educational circumstances',
              'Involves meaningful collaboration with community members',
              'Addresses systemic rather than individual issues',
              'Positions community members as knowledge producers',
              'Generates both practical change and theoretical insights',
              'Explicitly works toward social equity goals'
            ].map((item, i) => (
              <ChecklistItem key={i} text={item} />
            ))}
          </div>
        </Card>
      </Section>

      {/* Community Ethnography as Pedagogy */}
      <Section id="community-ethnography" title="Community Ethnography as Pedagogy">
        <Card>
          <div className="flex items-start space-x-4 mb-4">
            <Search className="w-10 h-10 text-teal-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-lg mb-3 text-teal-800">
                <GlossaryTooltip term="Community Ethnography as Pedagogy">
                  Community Ethnography
                </GlossaryTooltip> as a Teaching Approach
              </h4>
              <p className="text-stone-700 leading-relaxed">
                Using community ethnography as pedagogy means students conduct ethnographic research in their
                own communities to validate community knowledge, disrupt traditional classroom norms, and
                center relevant community experience as the curriculum itself.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <Card className="bg-teal-50">
              <h5 className="font-bold text-teal-800 mb-2">1. Coplanning</h5>
              <p className="text-sm text-stone-700 mb-3">
                Disrupting norms of the science classroom by planning with students and community
              </p>
              <div className="bg-white p-2 rounded text-xs text-stone-600">
                Example: Students help design the research questions
              </div>
            </Card>
            <Card className="bg-orange-50">
              <h5 className="font-bold text-orange-800 mb-2">2. Coproduction</h5>
              <p className="text-sm text-stone-700 mb-3">
                Validating the community's powerful cultural knowledge through collaborative creation
              </p>
              <div className="bg-white p-2 rounded text-xs text-stone-600">
                Example: Community members co-author findings
              </div>
            </Card>
            <Card className="bg-yellow-50">
              <h5 className="font-bold text-yellow-800 mb-2">3. Community Ethnography</h5>
              <p className="text-sm text-stone-700 mb-3">
                Centering relevant community experience as pedagogy itself
              </p>
              <div className="bg-white p-2 rounded text-xs text-stone-600">
                Example: Student research becomes curriculum
              </div>
            </Card>
          </div>
        </Card>

        <Card className="mt-6 bg-gradient-to-r from-teal-50 to-blue-50">
          <h4 className="font-bold text-lg text-teal-800 mb-4">Sample Community Ethnography Process</h4>
          <EthnographyProcess />
        </Card>
      </Section>

      {/* YPAR */}
      <Section id="ypar" title="Youth-Participatory Action Research (YPAR)">
        <Card>
          <div className="flex items-start space-x-4 mb-4">
            <Users className="w-10 h-10 text-teal-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-lg mb-3 text-teal-800">
                <GlossaryTooltip term="Youth-Participatory Action Research (YPAR)">
                  YPAR
                </GlossaryTooltip>: Youth as Co-Researchers
              </h4>
              <p className="text-stone-700 leading-relaxed mb-4">
                YPAR is not just a methodology but an epistemological commitment to various forms of knowledge.
                Youth are trusted to produce and not just receive knowledge—they can build and lead research
                agendas of their making.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h5 className="font-bold text-red-800 mb-3">Traditional Research Epistemology</h5>
              <ul className="space-y-2 text-sm text-stone-700">
                <li>✗ Values objectivity and neutrality</li>
                <li>✗ Researchers are experts, subjects are data sources</li>
                <li>✗ Knowledge is extracted from communities</li>
                <li>✗ Research questions defined by academics</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-green-800 mb-3">YPAR Epistemology</h5>
              <ul className="space-y-2 text-sm text-stone-700">
                <li>✓ Values multiple forms of knowledge</li>
                <li>✓ Youth are co-researchers and knowledge producers</li>
                <li>✓ Knowledge is co-produced with communities</li>
                <li>✓ Youth define research questions and agendas</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="mt-6">
          <h4 className="font-bold text-lg text-teal-800 mb-4">YPAR Research Cycle</h4>
          <YPARCycle />
        </Card>

        <Card className="mt-6 bg-purple-50">
          <h4 className="font-bold text-lg text-purple-900 mb-3">Sample Youth-Generated Research Questions</h4>
          <div className="space-y-3">
            {[
              'Why don\'t we have green spaces in our neighborhood when other neighborhoods do?',
              'How does air quality affect students\' ability to focus in school?',
              'What would make our community safer for people who walk or bike?',
              'Why are science textbooks so disconnected from our lives?'
            ].map((question, i) => (
              <div key={i} className="bg-white p-3 rounded-lg border-l-4 border-purple-500">
                <p className="text-sm text-stone-700 italic">"{question}"</p>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      {/* Multimodal Case Studies */}
      <Section id="multimodal-cases" title="Multimodal Case Study Co-Development">
        <Card>
          <div className="flex items-start space-x-4 mb-4">
            <FileText className="w-10 h-10 text-teal-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-lg mb-3 text-teal-800">
                Supporting Youth in Creating Teaching Resources
              </h4>
              <p className="text-stone-700 leading-relaxed">
                Multimodal case studies combine video, audio, images, and text to tell rich stories of learning.
                When youth co-create these cases, they become teacher educators—their work teaches preservice
                teachers about authentic, equity-oriented practice.
              </p>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-teal-800 mb-3">Technology Tools</h5>
              <ul className="space-y-2 text-sm text-stone-700">
                <li className="bg-teal-50 p-2 rounded">📹 Video recording and editing (iMovie, WeVideo)</li>
                <li className="bg-teal-50 p-2 rounded">🎤 Audio recording (Voice Memos, Audacity)</li>
                <li className="bg-teal-50 p-2 rounded">📸 Photo documentation (Camera, annotation apps)</li>
                <li className="bg-teal-50 p-2 rounded">✍️ Digital storytelling (Google Sites, Padlet)</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-orange-800 mb-3">What to Document</h5>
              <ul className="space-y-2 text-sm text-stone-700">
                <li className="bg-orange-50 p-2 rounded">• Design process and iterations</li>
                <li className="bg-orange-50 p-2 rounded">• Connections to family and community knowledge</li>
                <li className="bg-orange-50 p-2 rounded">• Challenges and how they were addressed</li>
                <li className="bg-orange-50 p-2 rounded">• Reflections on identity and belonging in STEM</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="mt-6">
          <h4 className="font-bold text-lg text-teal-800 mb-4">Sample Multimodal Case Structure</h4>
          <MultimodalCaseStructure />
        </Card>
      </Section>

      {/* Engineering for Sustainable Communities */}
      <Section id="efsc" title="Engineering for Sustainable Communities (EfSC)">
        <Card>
          <div className="flex items-start space-x-4 mb-4">
            <Network className="w-10 h-10 text-teal-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-lg mb-3 text-teal-800">
                <GlossaryTooltip term="Engineering for Sustainable Communities (EfSC)">
                  EfSC Framework
                </GlossaryTooltip>
              </h4>
              <p className="text-stone-700 leading-relaxed">
                This framework uses two related epistemic toolsets to support students in recruiting,
                navigating, and developing multiple epistemologies in engineering design.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <Card className="bg-teal-50">
              <h5 className="font-bold text-teal-800 mb-3">Toolset 1: Community Engineering & Ethnography</h5>
              <p className="text-sm text-stone-700 mb-3">For defining problems</p>
              <ul className="space-y-2 text-xs text-stone-700">
                <li>• Conduct community interviews</li>
                <li>• Document local resources and challenges</li>
                <li>• Identify community aspirations</li>
                <li>• Define problems with community input</li>
              </ul>
            </Card>
            <Card className="bg-orange-50">
              <h5 className="font-bold text-orange-800 mb-3">Toolset 2: Integrating Perspectives</h5>
              <p className="text-sm text-stone-700 mb-3">Through iterative design</p>
              <ul className="space-y-2 text-xs text-stone-700">
                <li>• Sketch designs incorporating multiple knowledge sources</li>
                <li>• Prototype with community feedback</li>
                <li>• Optimize for community values</li>
                <li>• Evaluate with cultural criteria</li>
              </ul>
            </Card>
          </div>
        </Card>
      </Section>

      {/* Navigating Multiple Epistemologies */}
      <Section id="navigating-epistemologies" title="Navigating Multiple Epistemologies">
        <Card>
          <div className="flex items-start space-x-4 mb-4">
            <Target className="w-10 h-10 text-teal-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-lg mb-3 text-teal-800">
                <GlossaryTooltip term="Syncretic Learning">Syncretic Learning</GlossaryTooltip> Approach
              </h4>
              <p className="text-stone-700 leading-relaxed">
                Syncretic learning combines different traditions, perspectives, and practices to create
                something new. When people bring practices from different spaces together, tensions and
                sparks result that allow creation of new kinds of literacies and learning.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <TeacherMovesCard
              move="Validate Multiple Ways of Knowing"
              whatItLooksLike="'Your grandmother's knowledge about plants IS science. Let's investigate how her methods compare to what we're learning about biology.'"
              whatToDismiss="'That's nice, but let's focus on real science now.'"
            />
            <TeacherMovesCard
              move="Create Bridges Between Knowledge Systems"
              whatItLooksLike="'How does your family's water conservation practice connect to what engineers call sustainable design?'"
              whatToDismiss="'We'll learn about water conservation the scientific way.'"
            />
            <TeacherMovesCard
              move="Position Students as Experts"
              whatItLooksLike="'Can you teach us about the gardening techniques your family uses? We'll analyze them through engineering principles.'"
              whatToDismiss="'Your family gardens? That's cute, but we're doing engineering here.'"
            />
          </div>
        </Card>

        <div className="mt-6 p-6 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
          <h4 className="font-bold text-lg mb-3 text-yellow-900">Try This: Epistemology Mapping Activity</h4>
          <p className="text-sm text-stone-700 mb-3">
            For your next unit, create a map showing:
          </p>
          <ul className="space-y-2 text-sm text-stone-700">
            <li>• What community knowledge connects to this topic?</li>
            <li>• What cultural practices relate to these concepts?</li>
            <li>• What family expertise could inform this learning?</li>
            <li>• How can you explicitly bridge these knowledge systems in your teaching?</li>
          </ul>
        </div>
      </Section>
    </div>
  );
};

// Supporting Components

const ChecklistItem: React.FC<{ text: string }> = ({ text }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div
      onClick={() => setChecked(!checked)}
      className={`flex items-start space-x-3 p-3 rounded-lg cursor-pointer transition-all ${
        checked ? 'bg-green-50 border-2 border-green-400' : 'bg-stone-50 border-2 border-stone-200'
      }`}
    >
      <div className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 ${
        checked ? 'bg-green-500 border-green-500' : 'bg-white border-stone-300'
      }`}>
        {checked && <span className="text-white font-bold">✓</span>}
      </div>
      <p className="text-sm text-stone-700">{text}</p>
    </div>
  );
};

const EthnographyProcess: React.FC = () => {
  const steps = [
    { title: 'Identify Focus', desc: 'What community practice or knowledge will students investigate?' },
    { title: 'Plan Together', desc: 'Co-develop research questions with students' },
    { title: 'Collect Data', desc: 'Interviews, observations, photos, videos in community' },
    { title: 'Analyze Together', desc: 'What patterns emerge? What does this teach us?' },
    { title: 'Create & Share', desc: 'Document findings in multimodal formats' },
    { title: 'Apply to STEM', desc: 'How does this inform our science/engineering learning?' },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {steps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white p-4 rounded-lg shadow relative"
        >
          <div className="absolute -top-3 -left-3 bg-teal-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">
            {i + 1}
          </div>
          <h5 className="font-bold text-teal-800 mb-2 text-sm">{step.title}</h5>
          <p className="text-xs text-stone-600">{step.desc}</p>
        </motion.div>
      ))}
    </div>
  );
};

const YPARCycle: React.FC = () => {
  const phases = ['Identify Issue', 'Research Question', 'Collect Data', 'Analyze', 'Take Action', 'Reflect'];

  return (
    <div className="relative">
      <div className="flex justify-center items-center">
        <div className="relative w-80 h-80">
          {phases.map((phase, i) => {
            const angle = (i * 360) / phases.length - 90;
            const x = Math.cos((angle * Math.PI) / 180) * 120 + 160;
            const y = Math.sin((angle * Math.PI) / 180) * 120 + 160;

            return (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="absolute bg-teal-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-center text-xs font-bold p-2"
                style={{ left: x - 40, top: y - 40 }}
              >
                {phase}
              </motion.div>
            );
          })}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xs font-bold">
            Youth Lead
          </div>
        </div>
      </div>
    </div>
  );
};

const MultimodalCaseStructure: React.FC = () => {
  return (
    <div className="space-y-3">
      {[
        { component: 'Introduction Video', content: 'Youth introduce themselves and their project (2-3 min)' },
        { component: 'Photo Gallery', content: 'Design process, community connections, iterations' },
        { component: 'Audio Reflections', content: 'Youth discuss challenges, learning, identity' },
        { component: 'Written Narrative', content: 'Detailed explanation of engineering and community links' },
        { component: 'Discussion Questions', content: 'For PSTs to reflect on what they learned' },
      ].map((item, i) => (
        <div key={i} className="bg-gradient-to-r from-teal-50 to-blue-50 p-4 rounded-lg flex items-start space-x-3">
          <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
            {i + 1}
          </div>
          <div className="flex-1">
            <h5 className="font-bold text-teal-800 text-sm mb-1">{item.component}</h5>
            <p className="text-xs text-stone-700">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const TeacherMovesCard: React.FC<{
  move: string;
  whatItLooksLike: string;
  whatToDismiss: string;
}> = ({ move, whatItLooksLike, whatToDismiss }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow border-l-4 border-teal-500">
      <h5 className="font-bold text-teal-800 mb-3">{move}</h5>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-3 rounded">
          <p className="text-xs font-semibold text-green-800 mb-1">✓ What It Looks Like:</p>
          <p className="text-xs text-stone-700 italic">{whatItLooksLike}</p>
        </div>
        <div className="bg-red-50 p-3 rounded">
          <p className="text-xs font-semibold text-red-800 mb-1">✗ What to Avoid:</p>
          <p className="text-xs text-stone-700 italic">{whatToDismiss}</p>
        </div>
      </div>
    </div>
  );
};
