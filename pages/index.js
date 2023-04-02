import UserMessage from "../components/UserMessage.js";
import DefaultMessage from "../components/DefaultMessage.js";
import SubmitForm from "../components/SubmitForm.js";
import Section from "../components/Section.js";
import {
  messageList,
  cardListSection,
  formSection,
} from "../utils/constants.js";

const messageRendList = new Section(
  {
    dataItems: messageList,
    renderer: (item) => {
      const message = item.isOwner
        ? new UserMessage(item, ".message-template_type_user")
        : new DefaultMessage(item, ".message-template_type_default");

      messageRendList.setItem(message.generate());
    },
  },
  cardListSection
);

messageRendList.renderItems();

const form = new SubmitForm({
  templateSelector: ".form-template",
  handleSubmitForm: (dataInput) => {
    const userMessage = new UserMessage(
      dataInput,
      ".message-template_type_user"
    );
    messageRendList.setItem(userMessage.generate());
  },
});

const formElement = form.generate();

const formRenderer = new Section(
  {
    dataItems: [],
    renderer: () => {},
  },
  formSection
);

formRenderer.setItem(formElement);
