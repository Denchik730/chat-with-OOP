import UserMessage from "../components/UserMessage.js";
import DefaultMessage from "../components/DefaultMessage.js";
import { messageList } from "../utils/constants.js";

messageList.forEach((item) => {
  const message = item.isOwner
    ? new UserMessage(item, ".message-template_type_user")
    : new DefaultMessage(item, ".message-template_type_default");

  document.body.append(message.generate());
});
