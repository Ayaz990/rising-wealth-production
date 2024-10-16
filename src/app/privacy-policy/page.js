import MainContainer from "../_components/MainContainer";
import Section from "../_components/Section";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Rising Wealth",
  description:
    "At Rising Wealth, accessible from https://risingwealth.com, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data in our role as financial consultants.",
};

export default function Page() {
  return (
    <MainContainer>
      <Section>
        <div className="py-8 px-4">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 mb-2">
            Last updated <strong>October 16, 2024</strong>
          </p>
          <p className="text-lg mb-4">
            At <strong>Rising Wealth</strong>, accessible from{" "}
            <Link href="/" className="underline">
              https://risingwealth.com
            </Link>
            , we are dedicated to helping our valued clients achieve their financial goals through personalized financial strategies. This Privacy Policy outlines how we collect, use, and protect your personal information in our capacity as financial consultants.
          </p>
          <p className="text-lg mb-4">
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to{" "}
            <Link href="/contact-us" className="underline">contact us</Link>.
          </p>
          <p className="text-lg mb-4">
            This Privacy Policy applies to all clients who have engaged our financial consulting services through our official website or in person. It outlines our commitment to protecting your privacy and financial information.
          </p>
          
          <hr className="my-6" />

          <h2 className="text-2xl font-bold mt-6">Consent</h2>
          <p className="text-lg mb-4">
            By using our website and engaging our services, you hereby consent to our Privacy Policy and agree to its terms. You acknowledge that you are entrusting us with sensitive financial information, and we commit to treating this information with the utmost confidentiality and respect.
          </p>

          <h2 className="text-2xl font-bold mt-6">Information We Collect</h2>
          <p className="text-lg mb-4">
            To provide you with comprehensive financial advice, we may collect the following types of information:
          </p>
          <ul className="list-disc list-inside mt-2 text-lg mb-4">
            <li>Personal identification information (Name, email address, phone number, etc.)</li>
            <li>Financial information (Income, assets, liabilities, investment history, etc.)</li>
            <li>Risk tolerance and financial goals</li>
            <li>Employment information</li>
            <li>Family and lifestyle information relevant to your financial planning</li>
          </ul>
          <p className="text-lg mb-4">
            We collect this information through various means, including online forms, in-person consultations, and any documents you provide to us. We will always inform you about why we need this information and how it will be used.
          </p>

          <h2 className="text-2xl font-bold mt-6">How We Use Your Information</h2>
          <p className="text-lg mb-4">We use the information we collect to:</p>
          <ul className="list-disc list-inside mt-2 text-lg mb-4">
            <li>Provide personalized financial advice and strategies</li>
            <li>Analyze your current financial situation and future projections</li>
            <li>Recommend suitable financial products and services</li>
            <li>Comply with regulatory requirements and legal obligations</li>
            <li>Communicate with you about your financial plans and updates</li>
            <li>Improve our services and develop new offerings</li>
            <li>Protect against fraud and unauthorized transactions</li>
          </ul>

          <h2 className="text-2xl font-bold mt-6">Data Protection and Security</h2>
          <p className="text-lg mb-4">
            We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential.
          </p>

          <h2 className="text-2xl font-bold mt-6">Third-Party Disclosure</h2>
          <p className="text-lg mb-4">
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties unless we provide you with advance notice and obtain your consent. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
          </p>

          <h2 className="text-2xl font-bold mt-6">Your Rights</h2>
          <p className="text-lg mb-4">
            You have the right to access, correct, or delete your personal information at any time. If you would like to exercise any of these rights, please contact us. We will respond to your request within a reasonable timeframe.
          </p>

          <h2 className="text-2xl font-bold mt-6">Changes to This Privacy Policy</h2>
          <p className="text-lg mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold mt-6">Contact Us</h2>
          <p className="text-lg mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <ul className="list-none mb-4">
            <li><strong>Rising Wealth</strong></li>
            <li>[Your Address]</li>
            <li>Email: <a href="mailto:privacy@risingwealth.com" className="underline">privacy@risingwealth.com</a></li>
            <li>Phone: [Your Phone Number]</li>
          </ul>
        </div>
      </Section>
    </MainContainer>
  );
}
