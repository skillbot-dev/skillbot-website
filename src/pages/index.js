import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import { Link } from 'gatsby'
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';

import { HeroImage, Workshops, GlobalOrientation, Marketing } from '../svg/SvgImages'
import { ProactiveIcon, InclusiveIcon, CollaborativeIcon } from '../svg/Motifs' 

export default () => (
  <Layout>
    <section className="pt-10 md:pt-18 pb-18 md:pb-18">
      <div className="container mx-auto px-8 lg:flex items-center">
        <div className="lg:mt-12 text-center lg:text-left lg:w-1/2">
          <h1 className="text-6xl lg:text-6xl xl:text-6xl font-raleway font-bold leading-none">
            When you want<br />to change, think Skillbot
          </h1>
          <p className="font-montserrat text-3xl lg:text-4xl mt-6 font-light">
            Let us future proof you.
          </p>
          <p className="mt-6 text-gray-600 font-montserrat">We are offering internships. Get started now.</p>
          <p className="mt-2 md:mt-6 text-xl font-bold font-raleway">
            <Button className="rounded-full" size="lg" toPage='/internships'>Internships</Button>
          </p>
        </div>
        <div className="mt-12 sm:mt-16 md:mt-6 lg:w-1/2">
          <HeroImage/>
        </div>
      </div>
    </section>
    <section id="what" className="mt-24 pt-10 lg:pb-18 lg:pt-18 bg-primary-lighter">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold leading-relaxed">What we are</h2>
        <div className="mt-6 p-12 sm:p-6 text-lg xl:text-2xl text-center">
          <p className="mb-6">Skillbot aims to develop every student for tomorrow’s professional practice or research.</p>
          <p className="mb-6">
            The <span className="font-bold">Education Strategy</span> articulates the attributes of our future graduates.
          </p>
          <p className="mb-6">
            These are shaped by our understanding of the skills, knowledge, attributes, experiences and behaviors required of our students by employers in an increasingly competitive and global workforce.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:-mx-3 p-6">
          <div className="flex-1 px-3">
            <Card className="mb-8 bg-white">
              <p className="m-6 p-6 w-32 m-auto">
                <ProactiveIcon />
              </p>
              <p className="font-semibold text-xl">Proactive</p>
              <p className="mt-4">
                We analyse the needs of the industry and nature of higher education demands along with research and stakeholder data.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8 bg-white">
              <p className="m-6 p-6 w-32 m-auto">
                <InclusiveIcon />
              </p>
              <p className="font-semibold text-xl">Inclusive</p>
              <p className="mt-4">
                We will deliver the most general-to-specific skill set which suits all students with different inclinations and, from different domains.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8 bg-white">
              <p className="m-6 p-6 w-32 m-auto">
                <CollaborativeIcon />
              </p>
              <p className="font-semibold text-xl">Collaborative</p>
              <p className="mt-4">
                We ensure that students collaborate with professionals in the industry through projects, internships and research work.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Why Skillbot?</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Because you are ready for next step and you don’t want anything to your way. We will ensure that up skilling is enhanced through pedagogies informed by research ,best practice, and is refreshed through continual industry relevant experiential learning.
          </p>
        </div>
      }
      secondarySlot={
        <div className="mr-24">
          <p className="mt-8 lg:text-3xl text-2xl font-semibold text-teal-700 text-center italic leading-relaxed">
            “Skillbot education is the passport to future and tomorrow belongs to you if you prepare yourself today”
          </p>
        </div>
      }
    />
    <section className="pt-10 pb-16 lg:pb-10 lg:pt-10 bg-primary-lighter">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Our Vision</h2>
        <div className="mt-2 p-6 sm:p-6 text-lg xl:text-2xl text-left">
          <ul className="list-disc ml-4 p-6 text-justify">
            <li className="mb-4">
              We want to touch every life by empowering everyone with right blend of engineering, management and behavioral skillset with holistic approach and by continuous development.
            </li>
            <li className="mb-4">
              Drive world-class learning and knowledge creation through research-enhanced education.
            </li>
            <li className="mb-4">
              Expand learning opportunities through flexing the curriculum and increasing access to co-curricular and skill development  activities.
            </li>
            <li className="mb-4">
              Develop students’ skills, attributes and motivation to set them up for success – both at the during college and after they graduate.
            </li>
          </ul>
        </div>
      </div>
    </section>
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Workshops, Courses and Internships</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            We will facilitate better understanding of industry need through, Skill Development Workshops, Faculty Development Workshops, Internships and Industry opportunities to help students and faculty members understand the changing requirements and adapt to the challenges of the real world.
          </p>
        </div>
      }
      secondarySlot={<Workshops />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Global Orientation
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Through induction programmes, guest lectures and international tie-ups. Using experience, reach and networking built over years of trust, collaboration and in the spirit of continuous learning.
          </p>
        </div>
      }
      secondarySlot={<GlobalOrientation/>}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Data Analysis and Performance Optimzation
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            As an education startergry platform, we monitor and provide analysis on the most recent trends in the industry and provide insight to students and educational institutions to achieve our main goal talent transformation.
          </p>
        </div>
      }
      secondarySlot={<Marketing/>}
    />
    <section className="mx-auto py-24 bg-gray-200 rounded-lg text-center shadow">
      <h3 className="text-2xl font-semibold">Find out more about services offered by Skillbot</h3>
      <p className="mt-8">
        <Button className="rounded-full" size="xl" toPage="/services">Services</Button>
      </p>
    </section>
  </Layout>
);
