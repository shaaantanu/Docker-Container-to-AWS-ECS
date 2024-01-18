terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "4.45.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
  access_key = "AKIA3E6TNGEEIYLARY24"
  secret_key = "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"
}