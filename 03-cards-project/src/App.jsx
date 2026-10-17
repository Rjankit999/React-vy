import React from 'react'
import Card from './component/card'
const App = () => {

  const jobs = [
    {
      brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABVlBMVEX////qQzU0qFNChfT7vAUufPPg6P06gfSHrPc1f/T7uQCxyPr62djoKRH7twD/vQDpOirqPzAtpk7pNiXpNCIgo0b8wwAmefPpMB3qPC0ZokNDgv385+boJw780nrpNjf/+vH93Z/+897947D914ng7+P3+/j1sKzympXtaWDsW1H+9PTwiYPzpJ/4ysfucmrxlI7H1/ubzqZdtXINpldVj/XA38czqkOx2LmExJJ5wIn51NL2urf97u3rSz72wL37wCj8x0v8zmr8yVjw9P5vnvb+9eP+6cL+7Mr94ahMqk/T6ddHrmF+p/fQ3fyq1bOVzKHvfnfubmb4uXnrUDLvbyr0kR/4rBLtYC7ygiT3oRjvdDu6zvr7wzqLtVnnuRi8tC6ErkKaufiWsDzduB5kl/WyszNiq0rNtifTy3w9j806mqI2o3VAjNw8lbc4n4pAieQnqDbYB6nfAAAKZklEQVR4nO2c+3va1hnHZRni2kFGEhALFTI3DReD8QUSDASbLnWXttDYTrv1unXLll26rd3+/18mAQYkOEfvOToXofH5KU+fJ0ifnHPe77mpirJhw4YNGzZs2MCIeuHFSb/SaFSrZ9VqtVHpD05Sl7Jfig2Fk8bx0ZamWVY2k8noE5w/ZbOWpWVrd9V+qi77HalJ9Y9rmiOWN7ZQGHk9Y2n6aeNk7TRfNI40C+fmIa9nta3jwdp028v+qWbpQLkFzax2VX0h++WDKTRqWiZPajfF0C3r+ES2Ao56xdEjbjxfUzqSKdkiCE5Oi2H1JujWVSV6lafeyFu0nXMZI6NFrCELx1qGmd6EvHYUnRGZOtXYNd8cw7qKhmPqDRe/yDgWTjUm1QXpWJM7HuvHRV7tN3PUTiXOdSqWztnPJa81JPmlrrIC/FwyW1Jmc3dcB6AXQ7sT7neSEdFB5+i64Kp6pwn1c9GOBfql8mIbcELmqiBKsFqU4OdgFPtC/OpHokroMpaIgpPSeWc8jkyN+7KqL6mH3mNkOM/izsTXUD/FAU/BN/KG4Jwix0lcTUZILGOdcfKrb8msMYsU+YzFAvkWKCc0ToLWRlAQ3ARli93DSfAyG/MWrMe9yChXcResRSUHeQmeRmMmw0+wGoW5qAsvwYH81cQEXoKFuAsqW8zKqJGfXDMZXzqB3mHgL8ikyhjulRKrdnfWqPT7g36/0ji7OzI0KwuPWW6ClfCTNT2rXR2vvBZUGFTdKykQS26ChbCbMrplnOEvA6UagMsN3ARDzmXy1lYV8mr1/pGGHQz8BM/CnM0T3TW4bOjouT0/wVSIPprVG4Qbm4MrxAqUn2CIPpo1aLbfT65W1TWOglXaPqpnK5SPHBhLz+QoSFtHjWKYvb5q0dtxOAoqNbo+atXCHYEVaosTfZ6CA6qsNzTaDjqnMW9GnoIK1aI3U2NxMSRl5AUINmjKjMZqt31yQslVsE6xZjI0dncJ3CMuroLKGfmSIm+wPGWvFPkKXpInhc74cHbA947Ql8R1JnPE9YVYc7i3/9WvyARPZb8zGY/3Eo9+S6K4boKH+4lE4tHv4Ir6enVRRXm6l3AVv4YK5muy35iUsaDLN6BmNLZkvzApH84MH30LUbTW5nOlez5KzHj0XbBicQ0+VfLyZD+xQGBsZGXdUKbn5d6iYVBs5NetjDp4mjAwNrLR+z4piA/3En5FTGwwXE4I49d+QVxs5MXfLw/Nob+TYmPDWr8+qny21EmnsbFSUMylZLas7KSI2DDWbramoDopIja0tct6ZVUlXVD0xYbxRvbb0vASY+iPDb4bKbzACbosxEZ+LZvwCXoYTptxHhvr2YQfBLXhPDbWspAqysdBgolZbGS5fhPAjaBOOmnGcWxkZL8rFYHDcKroxIZelf2yVODS0KP49VeWsA/lmPIYaOjwvex3peP3YMG9p9QPuX7AmWvMw2HD0GX/CbXhw4MkVw4+QT/7N3DDBLWg8nB3mzPoZ78CG+49jrDhAfrZwTOameGrCBsmHyCfDS+l+4cRNtw9Rz4bub5fhl5QgOFD5LPBfnsvo2y48xb5bHih+SDShsi4wOzR+Nj/NNKGz1GPBs67E+EKjYA83EU9+lO4YQhBAYbIQHwFDouPom2YRM1MoWunROLjiBuiIh88pQkzZ1sTQ/qlkxjD14hHPwUbholDEbUUNW2Lj+EPoQ0/2xhKNkRNvTeGc8Ooj8P/X8PY5CEDw4jPaZC1NDbzUqRhbNYWyDlNbNaHSMPYrPGRM++47NNgtoRjsteGXuPHZb8UYxiTPW/M0UxMzi3Qu4lxOXvaRu4Ix+X8EL2rH5cz4J330A8Xc47P3RB9uibmLobME1J4MU2n/0BvmNyhAmyIOeUGr5/SP6p2idbw/Iv3qAArYm4qQOfe6T8+U80mrSEl10mo4Q7uZyCG6fSfnqmqaopSm3IOHr6YG0Og+6XpHz93BdVcW5TbhLfQXoo5xlcgs5r038d+Thu2RLlNeA5tQuQexpjAgZj+81RQDVFraLg+gBriSqkSdFc/nfjbTFA1e4LkxsBTNIn/Iez3Fum/qIsIbcR3UMHtd/gfwiVi+q/PPIYiGxHeSfGFBrdXMw0JSY0IrqTobah7UOt8JyRUPwLLKbiPYmc0YxDfH85CwtuIojLxHDyhwSx/p6zupgsh4W1FEXoOz8GdNGgYKiu7qSckvIZdAXqK8hrehIHDcFU19YWEt58OBQgSNGFQGo7xd1N/SIjvpz/Am3DnC8DveUN/RUh4DQWEIrwFAyalUzxz01Uh4eunHd6C8LUvICvGLPy/TVaHhE+Rc+6/Bk9nsBuJi8xrDSokfB21zNUQ7gfspMpsgYEOCZ/hiKfgJwR9FNhJ76+d4ELCp8hx9vYQXkeBldRlPK/Bh4SXHLeCSjIIQXE/5fFeUEgIUnxA0oLbuG+6fBzuT7ebJCtek22PA+akM/5hEvlxUrwm2Oh2OcB9W+mjZJMaqjnm5YZUEFxnxvSIG9EJDba5SDoGtw/wm2w+yuSNqJo5lguNc6Iq6hKwBeXnNkeuqNo3zATfEgvCo2IKjaEzGNn01Ot3xIeM6O+5UHSoFE0mxxnnB2Q1ZtyEmHNRBCPyYuNih27Gcsv+6X3+TUiVGJNmDDkab2xTvfgnqSLxKHTpUvVTh5xK31Xb6vipF//aJuuohIV0Cl03dbFHdI7t0X3HMdV/kzQjWRbOGFL2U/cF7RH57kZHtRf+US9+hivirtBgoe6nLrncLcn+Rqlr+5528csutKdC9hBXE0JQnTQkrLCWmp7mu/83Gv0HFotJzB2hoCfT99OJY84eNQPmcuV21/Q33/1fv4DFBkVSzGiG6af3knar2V7ZYUvDm55q5zAVDRQblGVmSou+oC5YupqjXrfZabeHw2G73blpdlsj287h7CaKwbGxS7DwXUGZheHMc45pAn/YNINiI0wfdQk7FMMTEBskK/vVdOQr/oJZ7SeBm8A4QqUiEzCxQbZ1gYJJtQkFMjZ24BuIWCgXUixBxEb4QTihrEZAcVVsHJAve1GK0ofiythIhktCD/IzQ12OjV0mVSZaip7Y2KFb9UZbcTE2aHZm1kBxHhuscsKjGDhNFsEsNtgLurPwSCi6sbGzzSgI/YoRiH43Nn56n/kYnNGKQDCq6n9/5iboTMMjUG/YH1V6kL+YsnlfNBtKLqk2/++RyjIHoynmvuettJ6aY3yUjmQoKRm5D8EFehKa0RR2c35MW3jBYXWEDkdsM4Y9eKViqIorquEPz+m4WXFixIOcKfh7zjnlrgBH076V5edSanF2NO2enA4qyNHxE/qtKgJujhHxc1k+hWdAzu5Gxc+l3DSZzgFMW72RPf6WaLewJ9Ykejm7J2QNQUz5ZhRe0r3eALzDIYVSM5Sko9eKXu/0U+70bBpLxy7Xa0deb8qw2XItoZrubQ2z14lS6YRQ6nQnN0ownu4FDduRa65N2y1Rat90W6rtmk4umbiM/+z8N1ttdZvt0trKLVIuDd17Qs1bl2bzxr07FA+zDRs2bNiwYUMk+B9rVKzOoKUFvgAAAABJRU5ErkJggg==",
      name: "Google",
      datePosted: "2 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTo3-7hEo5B0u5CTAkUh3QdVd6z4ty-9itlvxHcjftg&s=10",
      name: "Amazon",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$40",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR219NyRGtXLVUBJC_dNea7ZjYjhB-WxZfIo_khbnNCxA&s=10",
      name: "Microsoft",
      datePosted: "1 week ago",
      post: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65",
      location: "Noida, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf0lP2_kgCkHUWXDSmcPvGTYhE2XLv3amPV-aPYMxhrQ&s=10",
      name: "Meta",
      datePosted: "3 days ago",
      post: "React.js Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$50",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZheuI-XhiyyGjNPW98nS-GywUuuqSCeRq1jBhlmayWA&s=10",
      name: "Apple",
      datePosted: "2 weeks ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYaHC_9YxqnPCCaadcefalsMg2EOkjYOedtUHk1DvhWQ&s=10",
      name: "Netflix",
      datePosted: "4 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh4cvli6tFMgdWcZvqveTrFNk96w_cYzntM68jcWoYfA&s=10",
      name: "NVIDIA",
      datePosted: "6 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70",
      location: "Pune, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLaKS6lRGOkkxHIzgHJ0S_VMHZJA4MZbdlJbbK66B6_w&s=10",
      name: "Adobe",
      datePosted: "10 days ago",
      post: "Frontend Engineer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$35",
      location: "Noida, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSrncGAF1JBtAJZvev0sx37ashMQhlRrMF0z9uo_tLZg&s=10",
      name: "Salesforce",
      datePosted: "3 weeks ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTisugoW5xtO64rlUI9JB_-Akr2AnknL-yxwKcN_mFSvQ&s=10 ",
      name: "Oracle",
      datePosted: "10 weeks ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65",
      location: "Mumbai, India",
    },
  ];

  return (
    <div className='parant'>
      {jobs.map(function (elem) {
        return <Card company={elem.name} logo={elem.brandLogo} post={elem.post} date={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
      })}
    </div>
  )
}

export default App
