# Study Protocol  
Cloud-Based Behavioral Study on Salience and Transduction

## 1. Objective

The objective of this study is to collect behavioral data in order to operationalize and estimate parameters related to salience and transduction within a formal memory-structure framework.

The study focuses exclusively on measurable behavioral variables.

No clinical or medical claims are made.

---

## 2. Study Design

This study follows a two-phase within-subject design.

### Phase 1: Immediate Encoding

Participants are presented with a prompt and asked to provide:

- A short textual response (e.g., one adjective or short description)
- Emotional valence rating
- Intensity rating
- Confidence rating

Response time is recorded for behavioral analysis.

### Phase 2: Delayed Recall

After a predefined delay interval (e.g., 7 days), participants are asked to:

- Recall or recognize their previous response
- Provide confidence rating
- Complete recall task within measured response time

---

## 3. Measured Variables

The following variables are collected:

### Behavioral Measures
- Response time (milliseconds)
- Delayed recall success (binary or graded)
- Recall response time

### Self-Report Measures
- Emotional valence (ordinal scale)
- Intensity (ordinal scale)
- Confidence (ordinal scale)

### Structural Identifiers
- Random participant ID (UUID)
- Timestamp (phase 1 and phase 2)

No IP addresses or device fingerprints are stored.

---

## 4. Operational Definitions

For the purposes of this study:

- **Salience (behavioral proxy)** is operationalized through a combination of:
  - Self-reported intensity
  - Confidence rating
  - Response time during encoding
  - Recall probability

- **Transduction (behavioral proxy)** is operationalized as:
  - Immediate encoding strength (Phase 1 measures)
  - Retention and recall stability across time interval

These operationalizations are purely behavioral and do not imply neurological measurement.

---

## 5. Data Collection Procedure

1. Participant accesses study link via token-based system.
2. Participant provides consent.
3. Phase 1 tasks are completed.
4. System stores encrypted data in cloud database.
5. After delay interval, Phase 2 becomes accessible.
6. Phase 2 responses are stored and linked via participant ID.

No automated reminders requiring personal data are used.

---

## 6. Data Storage

Data is stored in an encrypted cloud database hosted within the selected AWS region (e.g., EU-based infrastructure).
No personally identifiable information is collected.

- Encrypted at rest
- Token-based participant linkage
- No third-party analytics services
- No tracking cookies

Data is exported periodically for analysis.

---

## 7. Inclusion Criteria

- Adult participants (self-declared)
- Voluntary participation
- Ability to complete both study phases

---

## 8. Exclusion Criteria

- Incomplete Phase 1
- Missing delayed recall phase
- Invalid or implausible response times (e.g., technical interruption)

---

## 9. Analysis Scope

Collected data will be used for:

- Estimation of behavioral parameters
- Statistical modeling (e.g., logistic regression or equivalent)
- Model evaluation and comparison

No diagnostic or psychological assessment is performed.

---

## 10. Limitations

- Behavioral proxies only
- Self-report bias possible
- Device-related variance in response time
- No neurological or physiological measurement

---

## 11. Versioning

Document version: 0.1  
Status: Initial protocol draft  
Last updated: 2026-02-13

