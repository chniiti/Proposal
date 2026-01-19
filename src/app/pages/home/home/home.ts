import { Component } from '@angular/core';
import { RevealDirective } from '../../../shared/reveal.directive';
import { UiButtonComponent } from '../../../shared/ui/button/button';
import { UiContainerComponent } from '../../../shared/ui/container/container';
import { NgFor } from '@angular/common';



type Experience = {
  title: string;
  org: string;
  period: string;
  highlights: string[];
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UiContainerComponent, UiButtonComponent, RevealDirective, NgFor],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  proposalPdf = '/assets/Bilel-Chniti-Executive-Proposal.pdf';
  cvPdf = '/assets/Bilel-Chniti-CV.pdf';
  linkedin = 'https://www.linkedin.com/in/bilel-ch/';
  mail = 'mailto:bilel.chniti@esprit.tn?subject=Opportunity%20in%20Qatar%20-%20Digital%20Transformation';

  experiences: Experience[] = [
    {
      title: 'Software Engineer',
      org: 'LabSoft • Tunis, Tunisia',
      period: 'Feb 2023 – Jan 2025',
      highlights: [
        'Designed domain-driven microservices with strict REST contracts and scalable delivery practices.',
        'Improved critical front-end performance through modern Angular architecture (standalone, lazy loading), accelerating user experience.',
        'Implemented security foundations with OAuth2/OIDC and Keycloak-based access patterns.',
        'Built DevOps/observability pipelines (CI/CD, GitOps, monitoring dashboards) to reduce operational friction and speed incident diagnosis.'
      ]
    },
    {
      title: 'Software Engineer – FindMe (Recruitment Platform)',
      org: 'Digital Power Consulting • Tunisia',
      period: 'Jan 2025 – Oct 2025',
      highlights: [
        'Delivered an ESN talent-matching platform with microservices and secure access flows.',
        'Implemented an NLP-based recommendation engine to improve matching relevance.',
        'Enabled real-time communication using WebSocket for fast collaboration and responsiveness.',
        'Strengthened production readiness via CI/CD, GitOps deployments and observability.'
      ]
    },
    {
      title: 'Software Engineer – OpsConnect (Complaint Management)',
      org: 'AirbusAtlantic • Tunisia',
      period: 'Jan 2021 – Jun 2021',
      highlights: [
        'Built a centralized platform to manage internal complaints and improve cross-department visibility.',
        'Delivered real-time dashboards for operational tracking and better management control.',
        'Automated operational workflows to reduce manual processing and response delays.',
        'Integrated an AI module to detect recurring issues and recommend resolution strategies.'
      ]
    }
  ];
}
