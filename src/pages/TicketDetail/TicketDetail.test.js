import React from "react";
import axios from "axios";
import { create } from "react-test-renderer";

import TicketDetail from "./index.js";
import Button from "../../components/Button";

jest.mock("axios");

// Testing data
const response = {
    data: {
      ticket: {
        "url": "https://anhtran.zendesk.com/api/v2/tickets/1.json",
        "id": 1,
        "external_id": null,
        "via": {
          "channel": "sample_ticket",
          "source": {
            "from": {},
            "to": {},
            "rel": null
          }
        },
        "created_at": "2019-06-03T11:12:36Z",
        "updated_at": "2019-06-03T11:12:38Z",
        "type": "incident",
        "subject": "Sample ticket: Meet the ticket",
        "raw_subject": "Sample ticket: Meet the ticket",
        "description": "Hi Anh,\n\nThis is your first ticket. Ta-da! Any customer request sent to your supported channels (email, chat, voicemail, web form, and tweet) will become a Support ticket, just like this one. Respond to this ticket by typing a message above and clicking Submit. You can also see how an email becomes a ticket by emailing your new account, support@anhtran.zendesk.com. Your ticket will appear in ticket views.\n\nThat's the ticket on tickets. If you want to learn more, check out: \nhttps://support.zendesk.com/hc/en-us/articles/203691476\n",
        "priority": "normal",
        "status": "open",
        "recipient": null,
        "requester_id": 381286659674,
        "submitter_id": 381276487473,
        "assignee_id": 381276487473,
        "organization_id": null,
        "group_id": 360004507953,
        "collaborator_ids": [],
        "follower_ids": [],
        "email_cc_ids": [],
        "forum_topic_id": null,
        "problem_id": null,
        "has_incidents": false,
        "is_public": true,
        "due_at": null,
        "tags": [
          "sample",
          "support",
          "zendesk"
        ],
        "custom_fields": [],
        "satisfaction_rating": null,
        "sharing_agreement_ids": [],
        "fields": [],
        "followup_ids": [],
        "brand_id": 360002607733,
        "allow_channelback": false,
        "allow_attachments": true
      }
    }
};

describe("TicketDetail component", () => { 
  
  it('get response data from mock fetching API', async () => {
      axios.get.mockResolvedValue( response );
      const component = create(<TicketDetail ticket = { response.data.ticket }/>);
      const instance = component.getInstance();
      await instance.componentDidMount();
      // Expect state updated to the same data with response
      expect(instance.state.ticket.id).toBe(response.data.ticket.id);
      expect(instance.state.ticket.subject).toBe(response.data.ticket.subject);
      expect(instance.state.ticket.description).toBe(response.data.ticket.description);
      expect(instance.state.ticket.priority).toBe(response.data.ticket.priority);
      expect(instance.state.ticket.status).toBe(response.data.ticket.status);
      expect(instance.state.ticket.created_at).toBe(response.data.ticket.created_at);
      expect(instance.state.ticket.updated_at).toBe(response.data.ticket.updated_at);
  });

  it("it shows a detail of ticket", async () => {
    // Creating component TicketDetail with testing data
    const component = create(<TicketDetail ticket = { response.data.ticket }/>);
    const testInstance = component.root;

    // Testing rendered data to be the same with props data
    expect(testInstance.findByType(TicketDetail).props.ticket.id).toBe(response.data.ticket.id);
    expect(testInstance.findByType(TicketDetail).props.ticket.subject).toBe(response.data.ticket.subject);
    expect(testInstance.findByType(TicketDetail).props.ticket.description).toBe(response.data.ticket.description);
    expect(testInstance.findByType(TicketDetail).props.ticket.priority).toBe(response.data.ticket.priority);
    expect(testInstance.findByType(TicketDetail).props.ticket.status).toBe(response.data.ticket.status);
    expect(testInstance.findByType(TicketDetail).props.ticket.created_at).toBe(response.data.ticket.created_at);
    expect(testInstance.findByType(TicketDetail).props.ticket.updated_at).toBe(response.data.ticket.updated_at);
  });

  it("renders the expected button ", () => {
      const component = create(<TicketDetail />);
      const rootInstance = component.root;
      const listOfButtons = rootInstance.findAllByType(Button);
      // Expect rendered data to be the same with props data
      expect(listOfButtons[0].props.text).toBe("Home");
  });
  
});
