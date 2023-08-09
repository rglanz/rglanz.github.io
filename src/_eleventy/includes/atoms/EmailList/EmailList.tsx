import { h } from "preact";
import { nanoid } from "nanoid";

export default () => {
  const inputId = `email_${nanoid(6)}`;
  const buttonId = `submit_${nanoid(6)}`;

  return (
    <div className="cs-email-list">
      <form
        id="cs-email-list-form"
        name="Email List"
        method="post"
        data-netlify="true"
      >
        <input
          required
          type="text"
          id={inputId}
          className="cs-email"
          name="email"
          placeholder="Email address..."
        />
        <button
          className="cs-button cs-submit"
          id={`submit_${buttonId}`}
          type="submit"
          title="submit email"
          aria-expanded="false"
          aria-controls="submit"
          aria-label="submit email"
        >
          <img
            src="/assets/svgs/right.svg"
            alt="submit key"
            className="cs-icon"
            width="20"
            height="20"
            loading="lazy"
            decoding="async"
          />
        </button>
      </form>
    </div>
  );
};
