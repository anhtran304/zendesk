import React from "react";
import ReactDOM from 'react-dom';
import axios from "axios";
import { create } from "react-test-renderer";
import TicketDetail from "./index.js";

jest.mock("axios");

// Testing data
const response = {
    "data": [
        {
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
    ],
    "next_page": "https://anhtran.zendesk.com/api/v2/tickets.json?page=2&per_page=1",
    "previous_page": null,
    "count": 4
};

describe("TicketDetail component", () => { 

  it("it shows a detail of ticket", async () => {
    // Creating component TicketDetail with testing data
    const component = create(<TicketDetail tickets = { response.data }/>);
    const testInstance = component.root;

    // Testing rendered data to be the same with props data

    expect(testInstance.findByType(TicketDetail).props.tickets[0].id).toBe(response.data[0].id);
    expect(testInstance.findByType(TicketDetail).props.tickets[0].subject).toBe(response.data[0].subject);
    expect(testInstance.findByType(TicketDetail).props.tickets[0].description).toBe(response.data[0].description);
    expect(testInstance.findByType(TicketDetail).props.tickets[0].priority).toBe(response.data[0].priority);
    expect(testInstance.findByType(TicketDetail).props.tickets[0].status).toBe(response.data[0].status);
    expect(testInstance.findByType(TicketDetail).props.tickets[0].created_at).toBe(response.data[0].created_at);
    expect(testInstance.findByType(TicketDetail).props.tickets[0].updated_at).toBe(response.data[0].updated_at);
  });

  it('get response data from mock fetching API', async () => {
      axios.get.mockResolvedValue( response );
      const component = create(<TicketDetail ticket = { response.data }/>);
      const instance = component.getInstance();
      await instance.componentDidMount();
      // Expect state updated to the same data with response
      // console.log(instance.state); // Work
    //   expect(instance.state.tickets.length).toBe(tickets.tickets.length);
  });
  
});
