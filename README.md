Steps to run the Project

1.	Create an IAM user for AWS configure in command prompt.
2.	Create a demo NodeJS application.
3.	Create a dockerfile and build an image locally to run a container and check if application is running properly.
4.	Create a provider block in terraform HCL for AWS.
5.	Create a resource block to create an AWS ECR repository. 
6.	Use push commands to authenticate docker, build image, tag image and push image in ECR repo.
7.	Create an ECS cluster.
8.	Create an IAM role for ecsTaskExecutionRole
9.	Configure an ECS task definition to get port mappings, application image, CPU, RAM and launch type as AWS Fargate.
10.	Create default VPC and subnets to connect to the internet, communicate to ECS and expose the application to available zones.
11.	Create a security group for routing HTTP traffic using a load balancer.
12.	Create an ECS service to maintain task definition. It will run the cluster, task and Fargate behind the load balancer and distribute traffic across the containers.
13.	Create an output block to get the deployed load balancer url.
14.	Use terraform configuration commands – init, plan and apply, to run the whole file and all the functions.
15.	Use terraform destroy to remove all the applied commands.
