import { WeElement, h } from "omi";
export default class _class extends WeElement {
  render(props) {
    return h(
      "div",
      {
        id: "app",
        class: "app"
      },
      h("header", null, h("h1", null, "Contacts Page")),
      h(
        "nav",
        null,
        h(
          "ul",
          null,
          h(
            "li",
            null,
            h(
              "router-link",
              {
                to: "/"
              },
              "Home"
            )
          ),
          h(
            "li",
            null,
            h(
              "router-link",
              {
                to: "/contact"
              },
              "Contact List"
            )
          )
        )
      ),
      h("main", null, h("router-view", null))
    );
  }
}
_class.css = ``;
