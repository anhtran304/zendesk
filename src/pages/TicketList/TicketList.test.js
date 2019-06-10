import React from "react";
import { create } from "react-test-renderer";
import axios from "axios";

import TicketList from "./index.js";
import Button from "../../components/Button";

jest.mock("axios");

// Mock data API
const response = {
    data: [
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
        },
        {
            "url": "https://anhtran.zendesk.com/api/v2/tickets/9.json",
            "id": 9,
            "external_id": null,
            "via": {
                "channel": "api",
                "source": {
                    "from": {},
                    "to": {},
                    "rel": null
                }
            },
            "created_at": "2019-06-03T13:56:45Z",
            "updated_at": "2019-06-03T13:56:45Z",
            "type": null,
            "subject": "excepteur laborum ex occaecat Lorem",
            "raw_subject": "excepteur laborum ex occaecat Lorem",
            "description": "Exercitation amet in laborum minim. Nulla et veniam laboris dolore fugiat aliqua et sit mollit. Dolor proident nulla mollit culpa in officia pariatur officia magna eu commodo duis.\n\nAliqua reprehenderit aute qui voluptate dolor deserunt enim aute tempor ad dolor fugiat. Mollit aliquip elit aliqua eiusmod. Ex et anim non exercitation consequat elit dolore excepteur. Aliqua reprehenderit non culpa sit consequat cupidatat elit.",
            "priority": null,
            "status": "open",
            "recipient": null,
            "requester_id": 381276487473,
            "submitter_id": 381276487473,
            "assignee_id": 381276487473,
            "organization_id": 367020471593,
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
                "amet",
                "labore",
                "voluptate"
            ],
            "custom_fields": [],
            "satisfaction_rating": null,
            "sharing_agreement_ids": [],
            "fields": [],
            "followup_ids": [],
            "brand_id": 360002607733,
            "allow_channelback": false,
            "allow_attachments": true
        },
        {
            "url": "https://anhtran.zendesk.com/api/v2/tickets/10.json",
            "id": 10,
            "external_id": null,
            "via": {
                "channel": "api",
                "source": {
                    "from": {},
                    "to": {},
                    "rel": null
                }
            },
            "created_at": "2019-06-03T13:56:45Z",
            "updated_at": "2019-06-03T13:56:45Z",
            "type": null,
            "subject": "ad sunt qui aute ullamco",
            "raw_subject": "ad sunt qui aute ullamco",
            "description": "Sunt incididunt officia proident elit anim ullamco reprehenderit ut. Aliqua sint amet aliquip cillum minim magna consequat excepteur fugiat exercitation est exercitation. Adipisicing occaecat nisi aliqua exercitation.\n\nAute Lorem aute tempor sunt mollit dolor in consequat non cillum irure reprehenderit. Nulla deserunt qui aliquip officia duis incididunt et est velit nulla irure in fugiat in. Deserunt proident est in dolore culpa mollit exercitation ea anim consequat incididunt. Mollit et occaecat ullamco ut id incididunt laboris occaecat qui.",
            "priority": null,
            "status": "open",
            "recipient": null,
            "requester_id": 381276487473,
            "submitter_id": 381276487473,
            "assignee_id": 381276487473,
            "organization_id": 367020471593,
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
                "laborum",
                "mollit",
                "proident"
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
    "next_page": "https://anhtran.zendesk.com/api/v2/tickets.json?page=1&per_page=25",
    "previous_page": null,
    "count": 104
  };

describe("TicketList component", () => { 

    it('get response data from mock fetching API', async () => {
        axios.get.mockResolvedValue(response);
        const component = create(<TicketList />);
        const instance = component.getInstance();
        await instance.componentDidMount();
        // Expect state updated to the same data with response
        console.log(instance.state);
        expect(instance.state.tickets.length).toBe(response.data.length); 
    });

    it("renders the expected button ", () => {
        const component = create(<TicketList />);
        const rootInstance = component.root;
        const listOfButtons = rootInstance.findAllByType(Button);
        // Expect rendered data to be the same with props data
        expect(listOfButtons[0].props.text).toBe("Previous");
        expect(listOfButtons[1].props.text).toBe("Next");
    });

});

