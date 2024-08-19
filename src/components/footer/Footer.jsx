import { Flex, Link, Text } from '@chakra-ui/react'

const Footer = () => {
    const originalDsaSheetLink =
        'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/'
    const originalAuthorLinkedInLink = 'https://in.linkedin.com/in/rajarvp'
    const gitHubLink = 'https://www.linkedin.com/in/satyam-mishra-b5b2b324b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'

    return (
        <Flex
            className={'footer'}
            bg={'footerBg'}
            w={'100vw'}
            px={4}
            py={1}
            flexGrow={'0'}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            userSelect={'none'}
        >
            <Text
                fontWeight={'md'}
                fontSize={'xs'}
                fontFamily={'customFamily'}
                fontStyle={'normal'}
                color={'secondaryColor'}
                textAlign={'center'}
            >
                A Personal web-based progress tracker based on{' '}
                {
                    <a
                        href={originalDsaSheetLink}
                        target={'_blank'}
                        rel="noreferrer"
                    >
                        <b>A2Z DSA Sheet</b>
                    </a>
                }{' '}
                by{' '}
                {
                    <a
                        href={originalAuthorLinkedInLink}
                        target={'_blank'}
                        rel="noreferrer"
                    >
                        <b>Striver</b>
                    </a>
                }
                .
            </Text>

            <Link
                href={gitHubLink}
                target={'_blank'}
                _hover={{}}
                display={{ base: 'none', md: 'flex' }}
            >
                <Text
                    w={'fit-content'}
                    h={'fit-content'}
                    px={4}
                    py={1}
                    bg={'secondaryColor'}
                    borderRadius={'16px'}
                    fontWeight={'lg'}
                    fontSize={'xs'}
                    fontFamily={'customFamily'}
                    fontStyle={'normal'}
                    color={'defaultColor'}
                >
                    Contact me
                </Text>
            </Link>
        </Flex>
    )
}

export default Footer
