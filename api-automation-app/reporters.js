export const reporters = [
    'default',
    ['jest-html-reporters', {
        publicPath: './custom-report-directory',
        pageTitle: 'My Test Report', // Specify the title of the HTML report
        logo: './logo.png' // Specify the path to your logo image file
    }]
];

export default reporters;

