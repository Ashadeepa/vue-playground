<template>
  <div style="width: 650px; position: relative;">
    <iframe src="likePage.html" width="600" height="600" frameborder="0" allowfullscreen>
    </iframe>
    <div class="story-book">
      <h1>ClickJacking</h1>
      <p class="truncate-text">Clickjacking is a sophisticated and deceptive technique that exploits the trust users
        place in web applications and the visual interface of web pages. At its core, clickjacking involves tricking a
        user into clicking on something different from what they believe they are clicking on, which can lead to
        unintended actions and potentially severe consequences. This malicious practice is particularly insidious
        because it often operates without the user's knowledge, making it difficult to detect and prevent. The term
        "clickjacking" itself is a portmanteau of "click" and "hijacking," aptly describing the act of hijacking a
        user's clicks to perform actions that the user did not intend. The implications of clickjacking can be
        far-reaching, affecting not only individual users but also organizations and their data security.

        The mechanics of clickjacking typically involve the use of transparent or opaque layers over legitimate web
        content. An attacker may create a malicious web page that contains an iframe, which is an HTML element that
        allows one web page to be embedded within another. By positioning this iframe over a legitimate button or link
        on a trusted site, the attacker can manipulate the user’s clicks. For instance, a user might think they are
        clicking a "Play" button on a video, but in reality, they are clicking a hidden button that authorizes a
        transaction or changes their account settings on a different site. This deceptive layering can be executed in
        various ways, including using CSS to make the iframe invisible or partially visible, thereby creating a false
        sense of security for the user.

        The potential consequences of clickjacking are alarming. Users may unknowingly expose sensitive information,
        such as login credentials or personal data, or even authorize actions that compromise their accounts. For
        example, a user might be tricked into liking a page on social media, following an account, or even making a
        financial transaction without their consent. This can lead to identity theft, financial loss, and a breach of
        privacy. Moreover, organizations can suffer reputational damage and financial repercussions if their users fall
        victim to clickjacking attacks, as trust in their platforms may be eroded.

        To combat clickjacking, web developers and organizations must implement various security measures. One effective
        strategy is the use of the X-Frame-Options HTTP header, which can prevent a web page from being embedded in an
        iframe on another site. By setting this header to "DENY" or "SAMEORIGIN," developers can significantly reduce
        the risk of clickjacking attacks. Additionally, the Content Security Policy (CSP) can be employed to control
        which resources can be loaded on a web page, further mitigating the risk of malicious iframes. Educating users
        about the dangers of clickjacking and encouraging them to be vigilant when interacting with web content is also
        crucial. Users should be advised to look for visual cues, such as the URL of the site they are on, and to be
        cautious when clicking on links or buttons, especially if they seem out of place or unexpected.

        Despite these preventive measures, clickjacking remains a persistent threat in the digital landscape. Attackers
        continuously evolve their tactics, making it essential for developers and security professionals to stay
        informed about the latest trends and vulnerabilities. Regular security audits, penetration testing, and keeping
        software up to date are vital practices that can help organizations identify and address potential weaknesses in
        their systems. Furthermore, fostering a culture of security awareness among users can empower them to recognize
        and report suspicious activities, thereby creating a more resilient online environment.

        In conclusion, clickjacking is a malicious technique that poses significant risks to both users and
        organizations. By exploiting the trust users place in web applications, attackers can manipulate clicks to
        perform unintended actions, leading to potential data breaches and financial losses. To combat this threat, it
        is essential for developers to implement robust security measures, educate users about the risks, and remain
        vigilant against evolving tactics. As the digital landscape continues to grow and change, a proactive approach
        to security will be crucial in safeguarding against clickjacking and other cyber threats. Ultimately, fostering
        a secure online environment requires collaboration between developers, organizations, and users, all working
        together to mitigate risks and protect sensitive information.</p>
    </div>
    <span class="btn"> Read More ...</span>
  </div>
</template>

<script>
export default {
  name: 'ClickJacking',
  mounted() {
    this.truncateText();
  },
  methods: {
    truncateText() {
      const paragraph = document.querySelector('.truncate-text');
      const words = paragraph.innerText.split(' ');
      if (words.length > 100) {
        paragraph.innerText = words.slice(0, 100).join(' ') + '...';
      }
    }
  }
}
</script>

<style scoped>
iframe {
  border: none;
  position: absolute;
  top: -180px;
  left: 0;
  opacity: 0.0;
}

.btn {
  margin-right: 320px;
  cursor: pointer;
  color: blue;
  text-decoration: underline;
}
</style>