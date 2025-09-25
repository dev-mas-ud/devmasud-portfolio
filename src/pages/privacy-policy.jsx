import React from "react";
import Head from "next/head";
import {
  Box,
  Container,
  Heading,
  Text,
  Link,
  List,
  Separator,
} from "@chakra-ui/react";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | ByteDesign</title>
        <meta
          name="description"
          content="ByteDesign privacy policy complying with Nigeria's Data Protection Act (2023) and NDPR."
        />
      </Head>

      <Box bg="#fff" py={{ base: 8, md: 16 }}>
        <Container maxW="4xl">
          <Heading as="h1" fontSize={"2em"} mb={4}>
            Privacy Policy
          </Heading>
          <Text lineHeight={2} mb={6}>
            Effective date: 3 September 2025
          </Text>

          <Text lineHeight={2} mb={4}>
            This Privacy Policy explains how <strong>ByteDesign</strong> ("we",
            "us", "our") collects, uses, discloses and safeguards personal data
            in Nigeria and elsewhere, in accordance with the Nigeria Data
            Protection Act, 2023 (NDPA) and the Nigeria Data Protection
            Regulation, 2019 (NDPR). It also describes your rights and how you
            can exercise them.
          </Text>

          <Separator my={6} />

          <Heading as="h2" fontSize={"1.7em"} mb={2} id="who-we-are">
            1) Who we are
          </Heading>
          <Text lineHeight={2} mb={4}>
            ByteDesign is a web design & development company based in Nigeria.
            Registered office: Yobe, Nigeria. Contact email:
            <Link href="mailto:privacy@bytedesign.ng">
              {" "}
              privacy@bytedesign.ng
            </Link>
            .
          </Text>

          <Heading as="h2" fontSize={"1.7em"} mb={2} id="data-we-collect">
            2) Personal data we collect
          </Heading>
          <List.Root mb={4} pl={6}>
            <List.Item lineHeight={1.9}>
              Account & project: authentication details (hashed), proposals,
              contracts, feedback, files you upload.
            </List.Item>
            <List.Item lineHeight={1.9}>
              Usage & device: IP address, browser/OS, device identifiers, pages
              viewed, referral URLs, session metrics.
            </List.Item>
            <List.Item lineHeight={1.9}>
              Payments: transaction references and billing details (processed
              via payment providers; we do not store full card numbers).
            </List.Item>
            <List.Item lineHeight={1.9}>
              Marketing preferences and communication history.
            </List.Item>
          </List.Root>

          <Heading as="h2" fontSize={"1.7em"} mb={2} id="how-we-use">
            3) How we use personal data & our lawful bases
          </Heading>
          <List.Root mb={4} pl={6}>
            <List.Item lineHeight={1.9}>
              Provide and improve services (legal bases: contract necessity,
              legitimate interests).
            </List.Item>
            <List.Item lineHeight={1.9}>
              Communicate with you: service announcements, support, marketing
              with your consent (legal bases: contract necessity, consent,
              legitimate interests).
            </List.Item>
            <List.Item lineHeight={1.9}>
              Compliance, security & fraud prevention (legal bases: legal
              obligation, vital interests, legitimate interests).
            </List.Item>
          </List.Root>

          <Heading as="h2" fontSize={"1.7em"} mb={2} id="cookies">
            4) Cookies & similar technologies
          </Heading>
          <Text lineHeight={2} mb={4}>
            We use essential cookies to make our site work and optional
            analytics/advertising cookies to improve services. You can manage
            preferences via our cookie banner or your browser settings. See our{" "}
            <Link textDecoration={"underline"} href="/cookie-policy">
              Cookie Policy
            </Link>
            .
          </Text>

          <Heading as="h2" fontSize={"1.7em"} mb={2} id="sharing">
            5) Sharing & processors
          </Heading>
          <Text lineHeight={2} mb={4}>
            We share personal data with trusted vendors such as hosting,
            analytics, customer support, payment processors, and cloud storage
            under contracts requiring confidentiality and compliance. We may
            also disclose data where required by law.
          </Text>

          <Heading as="h2" fontSize={"1.7em"} mb={2} id="cross-border">
            6) Cross-border data transfers
          </Heading>
          <Text lineHeight={2} mb={4}>
            Where personal data is transferred outside Nigeria, we ensure lawful
            mechanisms such as adequacy decisions, safeguards (e.g., contractual
            clauses), explicit consent, or necessity for contract performance.
          </Text>

          <Heading as="h2" fontSize={"1.7em"} mb={2} id="your-rights">
            7) Your rights under NDPA/NDPR
          </Heading>
          <List.Root mb={4} pl={6}>
            <List.Item lineHeight={1.9}>
              Right to information and transparent processing
            </List.Item>
            <List.Item lineHeight={1.9}>Right of access</List.Item>
            <List.Item lineHeight={1.9}>Right to rectification</List.Item>
            <List.Item lineHeight={1.9}>Right to erasure</List.Item>
            <List.Item lineHeight={1.9}>Right to restrict processing</List.Item>
            <List.Item lineHeight={1.9}>
              Right to object, including to direct marketing
            </List.Item>
            <List.Item lineHeight={1.9}>Right to data portability</List.Item>
            <List.Item lineHeight={1.9}>Right to withdraw consent</List.Item>
            <List.Item lineHeight={1.9}>
              Right not to be subject to solely automated decisions
            </List.Item>
          </List.Root>
          <Text lineHeight={2} mb={4}>
            To exercise your rights, please contact us at{" "}
            <Link
              textDecoration={"underline"}
              href="mailto:privacy@bytedesign.ng"
            >
              {" "}
              privacy@bytedesign.ng
            </Link>
            .
          </Text>

          <Heading as="h2" fontSize={"1.7em"} mb={2} id="security">
            8) Security
          </Heading>
          <Text lineHeight={2} mb={4}>
            We implement technical and organisational measures such as
            encryption, access controls, and secure development practices. No
            system is 100% secure, but we take steps to reduce risks.
          </Text>

          <Heading as="h2" fontSize={"1.7em"} mb={2} id="retention">
            9) Data retention
          </Heading>
          <Text lineHeight={2} mb={4}>
            We retain personal data only as long as necessary for the purposes
            described and to comply with legal obligations. When no longer
            needed, data is securely deleted or anonymised.
          </Text>

          <Heading as="h2" fontSize={"1.7em"} mb={2} id="children">
            10) Children's data
          </Heading>
          <Text lineHeight={2} mb={4}>
            We do not knowingly collect personal data from children under 18
            without parental or guardian consent. If you believe we have
            received such data, contact us to remove it.
          </Text>

          <Heading as="h2" fontSize={"1.7em"} mb={2} id="complaints">
            11) Contact, Data Protection Officer & complaints
          </Heading>
          <Text lineHeight={2} mb={4}>
            For questions or concerns, email privacy@bytedesign.ng. You also
            have the right to lodge a complaint with the Nigeria Data Protection
            Commission (NDPC) at{" "}
            <Link textDecoration={"underline"} href="https://ndpc.gov.ng">
              ndpc.gov.ng
            </Link>
            .
          </Text>

          <Heading as="h2" fontSize={"1.7em"} mb={2} id="changes">
            12) Changes to this policy
          </Heading>
          <Text lineHeight={2} mb={4}>
            We may update this policy from time to time. Updates will appear on
            this page and, if material, we will notify you by email or other
            means.
          </Text>
        </Container>
      </Box>
    </>
  );
}
