---
title: "Configuring AWS Integration"
aside: true
outline: deep
---

# Configuring AWS Integration

In order to use AWS for `Optical Character Recognition (OCR)` and `named entity recognition`,
credentials with the appropriate permissions are required. The easiest way to do this is to send an
email to your local IT department to provision the required credentials for you.

An example message is shown following:

::: info

Hi,

Please provision IAM credentials for use with an application I need for my work.

The product is called Describo Desktop and you can read about it @ https://describo.github.io.

The application requires AWS credentials with permission to access IAM, Textract and Comprehend. The
exact permissions required are detailed @
https://describo.github.io/documentation/guide/configuration/setting-up-aws.html.

Please consult the section 'Fine Grained Permissions' on that page for what is required.

Thanks,

\<YOU\>

:::

## Fine Grained Permissions

If choosing permissions explicitly, the following are required.

```JSON
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "iam:GetPolicyVersion",
                "iam:GetPolicy",
                "iam:GetUserPolicy",
                "iam:ListGroupsForUser",
                "iam:ListAttachedUserPolicies",
                "iam:ListUserPolicies",
                "iam:GetUser"
            ],
            "Resource": [
               ...the specific user
            ]
        },
        {
            "Sid": "VisualEditor1",
            "Effect": "Allow",
            "Action": [
                "textract:AnalyzeExpense",
                "textract:DetectDocumentText",
                "comprehend:DetectTargetedSentiment",
                "s3:GetObject",
                "comprehend:DetectSentiment",
                "comprehend:DetectToxicContent",
                "textract:AnalyzeDocument",
                "comprehend:DetectEntities",
                "comprehend:DetectDominantLanguage",
                "comprehend:DetectPiiEntities",
                "comprehend:DetectKeyPhrases",
                "textract:AnalyzeID"
            ],
            "Resource": "*"
        }
    ]
}
```

## Broad permissions

Assign the following policies to the user:

-   AmazonTextractFullAccess
-   ComprehendReadOnly
-   IAMReadOnlyAccess
