import UserMessage from "../components/UserMessage.js";
import DefaultMessage from "../components/DefaultMessage.js";
import Section from "../components/Section.js";
import { messageList, cardListSection } from "../utils/constants.js";

const sect = new Section(
  {
    dataItems: messageList,
    renderer: (item) => {
      const message = item.isOwner
        ? new UserMessage(item, ".message-template_type_user")
        : new DefaultMessage(item, ".message-template_type_default");

      sect.setItem(message.generate());
    },
  },
  cardListSection
);

sect.renderItems();
