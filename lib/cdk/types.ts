import { StackProps } from 'aws-cdk-lib'
import { Runtime } from 'aws-cdk-lib/aws-lambda'
import { IHostedZone } from 'aws-cdk-lib/aws-route53'
import { IVpc } from 'aws-cdk-lib/aws-ec2'

export interface CustomStackProps extends StackProps {
	apigwServerPath: string
	apigwImagePath: string
	assetsZipPath: string
	codeZipPath: string
	dependenciesZipPath: string
	imageHandlerZipPath: string
	imageLayerZipPath: string
	imageLambdaHash: string
	customServerHandler: string
	customImageHandler: string
	lambdaTimeout: number
	lambdaMemory: number
	lambdaRuntime: Runtime
	lambdaVpc?: IVpc
	imageLambdaTimeout?: number
	imageLambdaMemory?: number
	redirectFromApex: boolean
	customApiDomain?: string
	certificateArn?: string
	domainNames: string[]
	awsProfile?: string
}

export interface MappedDomain {
	recordName?: string
	domain: string
	zone: IHostedZone
}
