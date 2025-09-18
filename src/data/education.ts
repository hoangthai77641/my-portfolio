export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  type: 'primary' | 'certificate' | 'competition';
  certificateUrl?: string;
}

export const education: Education[] = [
  {
    degree: 'Advanced Diploma in Software Engineering',
    institution: 'FPT Aptech HCM',
    period: '06/2023 - 07/2025',
    description:
      'Comprehensive program covering Frontend & Backend development, Database management, Mobile & Cross-platform development, and Cloud & Enterprise technologies. Participated in designing, programming, deploying and optimizing applications from Frontend to Backend.',
    type: 'primary',
    certificateUrl:
      'https://drive.google.com/file/d/16wYPeF2WvINLwcYv655D2RhhCoeUfVPU/view?usp=sharing',
  },
  {
    degree: 'Advanced Machine Learning and Deep Learning Projects',
    institution: 'FPT POLYTECHNIC Udemy Business',
    period: '06/2025',
    description:
      'Completed in-depth course on Machine Learning and Deep Learning with advanced real-world projects. Equipped with skills to develop and build machine learning projects from data processing, model training to evaluation and implementation.',
    type: 'certificate',
    certificateUrl:
      'https://drive.google.com/file/d/1ZF7zh1omYySOuhkxISzneTyFtKQzMV3_/view?usp=sharing',
  },
  {
    degree:
      'Certificate of Participation - Techwiz 5 (Global I.T. Competition)',
    institution: 'Aptech Computer Education',
    period: '11/2024',
    description:
      'Participated in Techwiz 5 - a global technology competition organized by Aptech, focusing on innovation and improving technology skills. Competition takes place from 18/09/2024 to 23/09/2024, with participation of Aptech student teams globally.',
    type: 'competition',
    certificateUrl:
      'https://drive.google.com/file/d/1gl9E85YQ_Fn9NRR5yVep3SCSvwMpPBIj/view?usp=sharing',
  },
];

export default education;
