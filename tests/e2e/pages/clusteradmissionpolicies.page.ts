import type { Page } from '@playwright/test';
import { BasePolicyPage } from './basepolicypage';

export class ClusterAdmissionPoliciesPage extends BasePolicyPage {

  constructor(page: Page) {
    super(page, 'dashboard/c/local/kubewarden/policies.kubewarden.io.clusteradmissionpolicy');
  }

}
