/* eslint-env jest */
import React from 'react';
import {
  SummaryDetailContent,
  SummaryDetailAction,
  SummaryDetailTitle
} from '../base/example';
import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

describe('Summary-Detail', () => {
  it('renders the detail content when closed', () =>
    matchesMarkup(
      <SummaryDetailContent referenceId="test-id-1">
        Lorem ipsum content
      </SummaryDetailContent>
    ));

  it('renders the detail content when open', () =>
    matchesMarkup(
      <SummaryDetailContent referenceId="test-id-2" isOpen>
        Lorem ipsum content
      </SummaryDetailContent>
    ));

  it('renders the summary title', () =>
    matchesMarkup(
      <SummaryDetailTitle>
        <h3>Summary Title</h3>
      </SummaryDetailTitle>
    ));

  it('renders an open summary-detail action', () =>
    matchesMarkup(
      <SummaryDetailAction
        referenceId="test-id-3"
        isOpen
        summaryTitle="Summary Title"
      />
    ));

  it('renders a closed summary-detail action', () =>
    matchesMarkup(
      <SummaryDetailAction
        referenceId="test-id-4"
        summaryTitle="Summary Title"
      />
    ));
});
