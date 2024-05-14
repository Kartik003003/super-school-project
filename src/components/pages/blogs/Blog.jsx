import { useState } from 'react';
import { Button, Image, Modal } from 'react-bootstrap';
import './Blog.css';

const BlogPage = () => {

    const [showModal, setShowModal] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    const blogPosts = [
        {
            id: 1,
            title: 'eLearning Industry',
            content: 'Support group for online teaching professionals who give remote access to education for students of all skill levels. Daily articles include everything related to online learning, from the most recent ideas.',
            imageSrc: 'https://honorswp.com/wp-content/uploads/2021/07/boy-studying-at-home-via-e-learning-website-G9RTPNU-2048x1365.jpg',
            modalContent: {
                text: [
                    "Technological Advancements: The eLearning industry has benefited significantly from advancements in technology, particularly the internet, mobile devices, and digital content creation tools. These technologies have enabled the development of diverse eLearning solutions, including online courses, virtual classrooms, educational apps, and learning management systems (LMS).",
                    "Global Reach: One of the main advantages of eLearning is its ability to reach a global audience. Learners from different geographic locations can access educational content and participate in courses without the need for physical presence. This has led to the democratization of education, making learning accessible to people worldwide.",
                    "Corporate Training and Professional Development: In addition to academic education, eLearning plays a crucial role in corporate training and professional development. Many businesses and organizations use eLearning platforms and resources to upskill their employees, deliver compliance training, and improve job performance."
                ],
                images: [
                    'https://static.voices.com/wp-content/uploads/2019/03/MR-3017-industry-elearning-1.jpg',
                    'https://cdn.elearningindustry.com/wp-content/uploads/2022/01/shutterstock_352173119-768x431.jpg',
                    'https://tse3.mm.bing.net/th?id=OIP.JLIKRR6OGvliv2p5uDLlEwHaDt&pid=Api&P=0&h=180'
                ]
            }
        },

        {
            id: 2,
            title: 'Discovery Education',
            content: 'Successful digital materials for elementary through secondary educators who want to enhance their classrooms while engaging their students. Professionally.',
            imageSrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhMVFRUXFSAaFxgYFxodGBseGx0YGh4dFh0dHSkiHyAlGxobITEhJSkrLi4uGh8zODMsNygtLisBCgoKDg0OGxAQGy8mICYtMDIwLS0vLi01LS0tLS0tLy0wLS0tLS0tLS8tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLf/AABEIANUA7AMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAABgQFBwMBAgj/xABIEAACAQMCAwQDDAcHBAIDAAABAgMABBESIQUxQQYTIlEyYXEHFBYjQlKBkZKhsdIzQ1RicpPBJFNjc4KishXR4fCjwhc0g//EABoBAAIDAQEAAAAAAAAAAAAAAAAEAgMFAQb/xAA6EQABAwEEBwcEAgECBwAAAAABAAIRAwQSITFBUWFxkaHwBRNSgbHB4RQiMtEVQvEGYiMzcoKiwuL/2gAMAwEAAhEDEQA/ANxooooQiiiihCKKKKEIornI4UEkgADJJ2AA6mkDiXbGa7Yw8LwIxkPeuuUBGQRbocd42flHw7ddqrq1WUm33mBtUmtLjACbOOdorWzUG5mWMt6K7l26YRFyzb+QpeftvcSb2/DpSm/iuJVgyB1C4d8fxBaSYbqGF5Pea++bknE15OxYA7ZBfm5GB4I8KMbkVW2VnccRYkSNJEDhp5R8USDuLWAeBsH5bZxjmcVj1e1Khk0wGgaXZ8BlxJIxAKeZYRF55w9d2vfgJzK0S390EhiJoIgMgfEXcUjf6lkERH0ZPqpl4Tx+3uiywyZdfSjYFJF8iUYBsHo2MHoazLivDordEhy0kkxK5kbOEUZdwgwi4GFBC7M61Q3nClS2tLu1jEczTnSYS0bvHJ3mlQUZWzoC48Q6jODUbN2q4kCpiMpiD54xsyG2EVbG0NvMPHnrX6CorI+zvG7vuu+tZnuAu72ty+otkavip2XvBkcteoZypAwcaTwDjEV5Ak8WdLc1YYdGGzI46Mp2IrWoWqnXm7mMwcCElUpuYYcrOiivhmAGScAcyaYUF91Rcd7W2Nkyrc3CRMwyFOS2PMhQSB6zWSe6T7q0kr+9+GSlIgPjJ1BDOfmx6hlVHzhuTywBvlU2uRi7szuxyzMSWY+bE7k0IW6cS93O0SYJDbyzRZ8UuQh9saMMt/qKVx4r7u0CNi3tJJl6s7iL7I0uT9OKw7uevTzrrDED6scwdiOvX1UIX6Ks/df4U/d6pnQuBq1RPhCeauwXGx6jI9dPkUgYBlIIIyCDkEHkQfKvx6bXIyNx5irnsr2uuuHzxSLLK0SkB4i5KNHncKpOkHGcHbBoQv1dRS12N7ZWvE42e31qyEB43ADrnOCcEgg4OCD06Uy0IRRRRQhFFFFCEUUUUIRRRRQhFFFFCEVC4pxGG2iaad1jjQZZmOAOg+kkgAdSai9ouP29jCZrh9KjZQN3djySNflMfL6Tgb0iC2mvZVu+IAKEOq3ts5SH96Xo8uOp2XfHqVtdrZZmXn56Br60/wCFZSpOqGAvLyafirapg0NiD4LfcST8iHuccl6iP6+lU3FLr35mCE93Zp4GKeEyldikZHoxDkSPSIIG3Or4zdx3FzJJbtcaJEEXeQvo71l1h1i1eGQhdOMgasOFbIGZfBOER3I0LxItGuxgjiSGVQNtMnylxjGwXrXna9Z1R3e1HbhB+3XETjtdGzGI07OKbDBBPDHmDG6eGccW/vyQWUA028ePfLrsoUfqUx8puR8hnnuK0OCFUVURQqqAFUDAAGwAqujazsIliDRQIPRUsAST6j4mY/STS3xvtA9yfe8UcgRxug2uJR5Kv6qM9ZHKnG2BnNJumplg0aTzM69k4DPCXK8udUcXHPkBq2e+gaFC4zdm6mPdHxXB9625HSMHMsw9XpHI5hI6sOKXqm/sbKJcxW8g7w9FfupO6T2hVZj9FQeFW0xZltNBnK93JcAf2e1Qfqrfb4xx1xtnGcchbX3Co7KOy7vOlL1TK7bsxlWSIyOepLOu/TboKfbZhcLjkAYHlnuAynMm9lE1VH3oDch+/c8BAzVdw2YWvEHQHCNcNCw9U6i4iP0SM6j/ADDTr2TfueJ3EIyEuYFnA6d5G3dSH1Eq0RPnikftdbMbq5VNna3imj9bwu+MfSEH0jzq/fjCg2HFQcRA6Zt9liuAEYt/BIEJ/hNFiqXLRTfOBF07yMP/ACngoWpl6lPWBj0jitZrNvds7Ue9bP3qikyXasmrOFVBpEhPUkhwoHrJJ2wdIBr87e7fxxp+I+9ioVLVdKnfUxlWN2J9WNIHsJ67epWSkS0gHXAHrq34dwzvQzatKZwpC7kYGSCfXkA46Vy4Zb65I1wMDxk/w4wB7SR9ANNNLVqpbgExRpg4lQE4NbjHxY2x5428xnBPtqXJAjEFlUkciQCfvr7opQuJzKZgaAqi64EpVxG7qSCVUEadR36jIGfXVFOmSVKsrgeIMMffyNOtUHHLYoxn5qwAfzXGwYerfcUxRqmYcVRVpiJAUv3LO0ktjfxooDR3MiQyqefibSrKehUsduRBI8iP09X5I4ZfSWl1DcQqGkjkBRCM6ifDpxjmQSBjcHBG9frONsgHBGRyPMe2nEqulFFFCEUUUUIRRRRQhFFFFCEVS9q+0MNhbtPNk76UQelI59FEHUn7gCelWV5cpFG8sjBURSzMeQCjJJ+gVlnCmk4lOOJ3IIQZFlCf1SHnI3Qu+Ac9Bj1YWtdpbZ6d93kNZ606FZSpmo6Au3DrC4uZhfcQwZcfEwDeO3X1DrIer/V0xQ8f4z78Lor6LGPPfS5x35HNEP8Adg82+UdhUvtJxJrqV7KIlYkGLlxzJO/cofZ6RHIHFV93ZpJPZWhUdyzszINlIhQuqkfNzjb1V5pl+vWDqh+48hnx1DRniYW1RotZTL4+0aNZmOE569i9s7a6vIx3MEUdsRhWuNXiUcikS7heWMkeYqJNwO6jnRLwWksch0RTOrs6t8iJpAVkGdwCxfcAczT/AMTa5GkWywkknUZWYADpgKpznlzGPXSzxbisl5bGBbWZZnbRq05hRkfBkEvIhSpI5E4G2+a1admp6GjjiNszxOrBVVaj3/kSSNnIRyXlt2TlX9GttF61Erfcpj+8mrSz7LIFKyuZFJyY1VYoSepZE3fP+Iz1d95Va1/I14IE0hEiEkrEZY6y6oib7eiWJ35AdaBQbMx8fpdeMr2PNfS8bs40bEsapFKICACFR+QTAG30bc/KpXFuHpcQyQSDwuuD5jqCPWCAR6wKG4XAQwMMZDvrcaBhnGPE227bDeq7iN7NBdRFmD207CLSR4opMEqVIG6tjBDciRg42qwYnBQ0Y5JavJpS0feBjd2qlZVxvcQNpzND84gqGKjfOoeVfXCuIx2yvFMBJYT5ZHA1JH3m7JIB+rJJIbkMkGm/ifD4Z1CyoGwcqdwynzRhgqfWDSNxHhjJcm3WS7eWQhoQsiIjIR42ncRE5QqcscsQyAZOaSfYrwIblq1acDsxiZgSMQRFt6626/KZBGg7tunLXgm3gnG7m37q2tJYr+NyO4RmbvY48gEvKmoGJM+kwBGy5JwKZu2PZGy4grrIsQudBWOX9YjYyucEFgDvpO2M+dZZf203DFFtaMkPvtD35Qs0id0RlopDhhqVwpB5Ekrjc0vyw2akq4i1fKLYLb9WY75J6k9a16VQ02AOcXHXEen+TrWW6kS45BVvZ+bEwBx40K7HIyp1bHqCNW/spmqg4Nw8GcyR57mMkJnqxGk6T1UZO9MRFU13C+mKNN1xfFFc7otoYR47zSdIOOfTP01yTvtaZ06dB14+fty9XOqwFImFJqHxs4t5c/3Z+8YqVbzK+dJzglT5gjmCKL6zEsbRk4DDGfL/ANNcvBpxUgwuGCtfcWht/fzmYAyrbAwFsYHiCyFc8m3QZ54Leut4r8qWVvCNXvrT3qcw+NAB2BQHYg+fPPlTDwTjbWBW5tnYQggyxKfi5IyRqwhOkOBkhhg5HkTWgKzZjmkO5MTyX6KorwGvauVSKKKKEIooooQiiiihCTfdbcjhNzg41BFY77K0sasdvJSaq+M3i2ltLKAMQxEqvTwjCj68CnXj3C0u7aa2k9GWMoT1GRswz1BwR6wKyHtBNK9hPaTpi7gVGlj594kboTLEceJGVT7DkHFY3a9A1DSJ/GYOySOXvEpuyvuhw0xh5SvjgtmYYVVz4z45WPV28Tkn2/hVVcSviPiuogRzBLWHG8ysSjkbZ1OM6fIJnfNWHHnEkARD4Z5I49Q+bK6qSPapP1127azkTKiLgWto8yL8nWwMcew+aqP9YrIpVS14fpJPDSPM4bBK3bUJLaDcsPXDhE74TJw3tNaTJrWZEPykkYI6HqrqxyCPq8q4dmpc2UEjHGqIOxPTUNRz9ZrEViUjJGonck7kk8yT1Nad7nfE4p7QWUvpqjKFcY72IlgGT5wxlTjyr09eydy0GZn9c1n0nm8L2kfpMfAuJi6iE6gBGY6MHJKgkZbyJxnT02zvXLiEMsU4u4YzKDGI5olIDlQSyvHkgFlLMNJIyG9VdrjgoJ1wuYJOrIAVYDAAkQ7NsAM7MOhFcxHxFOTWkvtWWM/czilpGhWOkth2evr/AAvk9sbQDxGZW+YbeYPnyxoqKonvZYZHia3toX7xVkwJpXAIUso9BVyTg7k1Jn4lfJs0VmM9TdOB9RhBryS04lLkPNBbr/go0j49TSYA266TXBGj19gFVBJx5D9/C6XXGkS6jtmZCZVOlQfGpALZYfNIBwdtx1zt88SGLuxcc+8kQ+tWhkc/7o1P0URW9rw6IszhATl5JGy8jebMd2b1D6BWZdp+1PvyYNEXSOHIjwSrEtsXODkZGwHlnzxV1KiarobxU3v+26czGHA9Hamn3Qr6Jb23XWNQjdXHzNRQpq8tWD91L/FQscEzKqqSpJwBuW2yfM71F7JxLI81s41RzRl2zzDKQNQJ3z4s+0U4cA9zsXtg4iu5UmjZ4ZEkCvGXQhlKnCsoZCjczjV1xXLkVjRJxbHmDjPtHNLVmuYy/oM+R1eYxnyVXYWojjWNeSjH/n6TvXcrUbh1wWXDgrIh0SodmV12YMOm9cI5ZFZndCVJwuk5KqOWV8zjOVydwOlZhD7xBzWuw07gIyXDhw+MnLY195g+YTA0Y9WN/bmp4FV1zPbyMD3oSQciGCuOuCG6eoio87qNnvdj0Xuwx9hUZ+qnA0kfBWW8gOw9lOst7ibTy0oG8tfi+/Tpz9FWumqK1clO7t4tKb5eUEA55nSfExPrxVnw2N0jCSNrYZGrzGTj7sf+aWrtMz11hkU/ZXC7Ea8dGfPPQoHG4x3ts+MsJdP0FWz9WAa638TSL3EY1STkRRr5s/h+oA5J6AUx9juyY4nLJLKZUt4RoieM6S8pI1FCQQVVQVOQQS58q0bs12EtLKQzJ3kkpGBJM+plB5hMAKoPqGfXWhQoOutLutKy7VXb3jg3rCEywR6VVc5wAM+wYrrRRTyQRRRRQhFFFFCEUUUUIRVPx/s/BeKolBDoSYpUOmWMkYyjfipyp6g1cUVwgEQULFO0PYLiNtC62+i7jDiSILiOWMq2sAJgq6ggbKQdyAAMAQF4ws90Jhgd7CInjbaSKWJpCY3U7gFWYg9dJrdZvRbfGx35Y251+f8As1wi3ubOJ2i8beJpDkS6wxy4k9LJYZG9KVOy6debv2nHzkARxA6JWhZLRU7wEmbuvUJ07iQu57K2mrV3ZAznQGYJ9nOMerl6qsbvh0UqhXRSF9HGxXHIoRgr9GKqh2gSCSS3nZ2eJgA4jY6wVDAkKMBgDg9DzHPA9TtXE7COKKeRyPCqxnJ3A68ufM7CsSrZbdehwcbuAOJHkcut4W6yrZrkiADmMOB63LuDeQzxRWc0krNqdop5NUehBv4mBdSWKqN+Z8s068F4rHdR95HkYJV0bZ43HNJB0YGs4mnuYIffqv3c0kzRXDaVPvcKcRxYbI0FvEzbZ1LUpOP28mqVjNb8QXCyLbb99geFiGBQpg833XlnlnSZTc1l1+Yz61D5yOGXUqBz7zRAOXWs/GYxfH4JamQzG3hMhOS5jUtkbZyRnlUDtDfStJHZ2rhJpAXd8Bu6iGxfSeZJIVR7fKkifj99pzLeNHkkKqLFq35DUIwXb+ECrj3Mr1FV4J1KXhfLGQESyqQrrqLbllDDwZyBjzNU2ioWUnPbjG8gbdw9SJwUXAtIaRE7p66zTHw/svbROJnDTSj9dOxdx1yufCv+kCkXgfA4by4iEobD20k2VOlvHOGXJHPAkPOm3tbxgkPZW7AzuuJG+TAjDdnPRiudK89weQqN2Etw7y3SDEIRbeD95YySzD1ajpH8FY7atVjTVvGcMZM6dO3GN04BWhrbpwzwHGTwgSdZhR7/ALP21nNbdwpDOZFYlizMNAbcnoCo2G29NfuXv8ffqDtqhYj94xkH61VfqpTv+IpPdvMGHcW0ZQPkaS7ENIVPUKqqufPNOfuVWxS0lvJcJ76lMq6tsRKqpHqz5qpb2MK1uzO8fWL3kyG4zrLpHLz3Kq1w2yhut0jcBHqp3arsHBet3ys1vcY/SxgePbAEyHaQD2g7bEVlvaK1m4fKkN3oHeZ7qVD8W4XGcg7odxscjfYmn/jnulR96lrw9VuZpGKiRiRbKVVmPjA+MIA5Jt687Uj9sOCuYZbq7f3xcM8epiuFVBKg7uFfkoATnz3J51s1LO2oCSPNZbLU6kQ0HM5b1XsAee9Q4IZA+filXJ9FTqPlk52++uKWUsP6Fwyf3chO38D7kewg10M9wdhCoPm0mQPoC5P3VngRkR1vTxdJxBUi8vFiXU2dzhQBlmJ5BR1NMvYfskOJRmaebRGrlWtoziYFSRpuG5pnGdKjOkjekm5tDHi5ZjJLE6yZ5KAjAsqDOw0557mtXTgZLC6tZmt5tO0igFXXGwmQ+F1+ojoRTdnoMcL2ZCUtFoqMIbkCtBsbOOGNYokVI1GFVRgAeoVJpL7DduYr2BDO8UVwSRoyVDhTs8QfBZSMHbOOWadKZVKKKKKEIooooQiiiihCKKKKEIoorOPdC7QySyHhdm+lyv8Aa5h+qjYegv8AiOPqHtyOgEmAugEmAq7tj2ifiMknD7VtNrGdN1OP1p5mGEjp85vo5el2trNUVVUAKoAUDkANgBRwnhkcMaxRrpRRgD+p8yTuTU28uEgieZ9ljQsfYBmnqbAwLRp0xTHqse4tLquLlhyE7D7OE/8ArTL7maD3xM3URIB7GaTP/FaTo2YjU/pMS7e1iWP3mpvCeOS2srCFQ0k8fdqSdlIbIY+YALH6que65SBdoiUy7CkJ2deyZ+1PEGF1PBaFW76LTdh11RxnAUMo5GQpkEctlzy2X44VgAgtY9chIVnPoKSCR3reeASF9XLzl8Ns5GcWlufjGy88zb6Aebt5ux5D2dN673trBHbukbSiOQBbdVk8dxIh1m6kJ5KG2yBuADv4MYHcVLYS8CGk4DXtKjebR/6tJ1awPc6+CsOGcQsbG1N2+ZbtfAwfHe95j0EHJE66lG677naquftPHPB3KQLMNRZ5Zjhu8bJLoiksu528QIGB0qBwxS0jmXe4GNTnGCp9HRsMDbljnX1fWbrIZ1AZe7w4yAdiSGGdjttuRVlkqtoVyysI0E6tmWXwsarb5qFjcBrOZ35jEQq7hMGA1tPPIiSMTlSqq+eYdiM6j5E4NH/VJ3jeNbm5a3jPdjS2ECZCIGIxnI2xv7KsI1WRAwHhYZAI/EVHltB6+YOMnGRyJGcEjocVpO7KYKneMggxg4TvI2xgCeOCrv1J/I6onDrlsVddSSLCI+8Jij8XdtjScb6WK4Yg79etNljJaaYjdWiRgoNEjfGQ4IyF1NunPkwA570s3GFKOw1BJFdhjOVUgn7s06dquJRx27DUC8iERLzLahzA8hnOeVJ21/09ZrKTBDscszPrrVFpqPcWjE6MzlqU/jx7lIbpRtbTpIQo/V7o+AP3Gz9FN/aXgYu7Z4kfT3igo6+oh1PrGQM+YzWS9mOOi3X3tcHXauNGW/V6hjB/cPL1eymlO08vDrOXh8gdpguiwlA2lVyEVSeQePV1xsB6ss1AQcVxlO79vBKY4uqu8MuO8jYq5jy8ZI2yrKOXt5cq6Hi9v/eA+oAk/UBmrXtj2bWySyKYx3bQSMNsv+kBP8R1/cKoNR8z9dY1drab4jmvWdnWIWygKgfBkg4avMaOirLgVk3E52tYm7pFGZmfAkKHmIkO5zy1HYZGeYzpvbm6FrY9xD+lmAtrdd85Yac58lTJz6h50h9iOzq3CzXAZophOBDMmzoY0CnHmpLEFTscezDlwDg15cXRu+IrGHiXurdY90AI+MlG+xc7b4IG3lT9FgawRpxWBayBWe0GbpIHkY5og4OqRJCFBRECgEdFAH9KjRcDijJMSdySckwkxE9dzGVJ3FPI4fXKXh9M3wVn9yQZCzztBYRCCR5lEojjZvjSZGGFJ2LkkH1itG7CIw4dZhm1H3rGSc53KKeeTnGcfRVPfcPBBBAIIwQRkEeR9VLvZi9fhV3HalibC5fTGDv73mY5CqT+rc526HfbctGoJEhWUDdcQdK1miiiqU2iiiihCKKKpO0Xaa2sU1TvhiPBGvilkPlGg3bfG/IZ3IoQqD3SeP3MDWtraMsclyZMylQxRYlUnQp2LHUME+X0hf4DwlIE0rqYsxZ3Y5d3PNnJ5kms27V9q7q9uxM+Y5YnIhiB8MAB31eZbbUT6Ww5ACtJ7JcbjvItS+GRdpY87o39VPMHr7c03Rbdzz6w3p6gy6JIxPUb1exrSH7p3FSSlkvIgSzHzAJ0J9LLqP8ACPOn+si7ahhxC4Lde70/w92OXq1avvpgCSAmWiXAda/bgqWu3CHCiW6fkoKr7F54/ibao8j6VJ8gT9VdOIxaIIIfM+L16RqP+6lO0yXhlEf2PIJlzoM6sfM4D1J8k49mOCQy2S3LSurSlmuSrEB1BOYnB5KoUDPPGrB8VQOL20kwF4qsHypSMbYgA2ixyyR4iPnHHQVV9n5ZjIbdGHcztmZD5IVLFfLUqhD5g/SHW5P40jbrQ6g9lOngRB4ZfsrznaVd1NzaTd526uOZ3pUtYpGnaVozGndhAGI1Ehic4BOBvijtCP7OTzUOpceaBhkf++VWs5/Go13F3kbx5xrQrnyJBAP10hUtLqtbvnxMg7MPhZneEvDzsXpiGNuWNqiTxV9cOvRhIpfBKBgq22ogc0PJh12NSJlr37XMqsD2GQdSeVNPHVd72wVWNcu5CKN/vPRQBn6Kt7hai21yIbiOZlLKuoNgZI1DGQOuPV0NZ1svMpucwS4DBSJIBhXMHZqGNT3g71yMMzDYZ5hB8kffTR2AvO8ia3mw72zhfEASV5xvv1xtn901RR8TjmXVG2oZwdiCD5EHcV17J3GjiKjpPCy4/ejOtf8AbrrzFjrP74h5z160gxzi4h2f66K0zinBor2BrebOh8bqcMpByGU9CDWBs0ulmSRWKl9LGPchS4B2OMnT5V+iI20ozfNUn6hmvz1wtcRRewH7RzV9tIDQY0r1v+m2F1V4kgXdBIxnPDVjC2nsHYxpZWwizpMSvk8yXGslvXljTnaxUm+5SS/DYM801x/YkdR/tAp6iFNF0jBYTaZaSDmumivh467Clng95I3EuIQs7NHHHbFFPJS6zatPlnSp9tQVisbq2zSt2m4EtxC8JJXUPCw5qw3Vh6wwBp3mAxk7Codxb5qwOVL2Kt7B8de7tQZsC4icw3CjpIm2eQ2YYf8A1Y6UzVnt5we6trpr6wKFpFVbi3k8KTBM6WVwPBIASoJBG+/XLB2d7WQXTGHDQXK+nbyjTKMdVHJ18mUkYqBEK1rpTFRRRXFJROJ3qwQyzv6MUbO3sQFj9wrG+ExSP/a7k67mYamY/IDeIRR5zpRc4wOtbDxmwFxbzW7EqJonjJHMB1Kkj2ZrK7/hd1YywwXDxzRSKVjnVChLoM6JFyQCVBIIO+k7VdQLQ7HyTFmLQ/HPQlDttwWRS13AmrK4lA5gjk4HUY2PsB86WLWVonja2kKSb/GKdyBu2ro2SRscitjtWqJedjrGclzFoc5y8RKHfqdOxOfMGmyOvOTCeI0Zj0xkxtKWeGe6POuVmgWXScF0bQTtndSCM79CPZXvbG1uZ44eJG0aKFkVWcyxsWWQqYm0qcgZYjffxjI2qyPuZwAELc3AycnPdnOefyBVre8Gu0sntLe7MsZgMSxXCIygYAXQ6BWVlA2J1DzHUQdfEFvXWSqcXtgt9utmMrJ7kZAHmVH1sP8AvU3tJ6dv7Zf+K1XNLlUbHVG/3LVv2oj2hf5shX7an+oFJW18WyidHynXC81xH+3hen2XLgEsiz6oygIjPpKWByV8mGDt+NNfD+Id9AkpABI8QHRgSCPrFKHAZcT484z9YK/96tBOLeZgx0wyLqz8gSAnOTyXUCD5EirO07E19Dv2D7gcc8RkOC832jTv1HOAxw4RCsrh6hXFwI1Z/mqTj2DNfcsudwc55EfjUOXBBU8iMH6dq88BrWYMF5JeLKiJcxaFlGUbUCoOMjxYGlsV9cKvS6sCS6ocLKRgOPPfqORPKuEN0qwrFcxllUAF8BkwNgSM6htjpUritmsqKuoqo3AXGkjoCCMEeqvYWCzUqZdVsz5aQJbOnadCfY1o/HJRJ7+InAkT6x+NRnYHcEEequswlXGHVwPkOgCY9Wlcg+uoiIQWY6QXOSFGFGABsPo51IVa7nxUYANYM+W9TBOkc18oXRmaNypbmMAqccsg/wBKvOyl6XurCQjxGfSfayOjVSGrf3PbNm4tahc6dTyMOgKo3i9WSQPaaTtdmaXCq0AEHHauOphxnStz4smLW4I5iCT/AINX5/tP0cf8C/gK/RvFov7NOP8ABf8A4NX5xtD8XH/Av4Vl23IL1H+msHVNw91rvuKS5triP5l0xHsdI2/HVWkqK/O/YztZc2M1xHBFFIsndu3eMw04QrhdIO52+z660Oz91u2A03kUtvJjbSO9Rz5Rsu+fUyj21dSeC0CcYCybbTLbRUMYXnepWk0ocHIHGOIY+Vb2zH1kd+PwqiufdXU/oLKdh5yvHEPbjLN9YpK4txuS6vGuJ4XSF4VjkghuP0ugsR3pKpqXxnw5HLqNql3jBpCX7t8TBTLd9orDiF7KL26iW0t37uG3aTSs0i7tLMNgUBwEBODgn26Jb8RjkGqN1dehUgj6xtSHwTtLaS6bZV7k4wsMiBQQOiYyjYHRSasZeydnIdaR+95ektue6kHryuAfYwI9VXQIkGUsXmYIhNrMDVfxfgNvdqFnjDYOVbk6HoY3HiU56g0trxa44e4j4gwkgZgsV4BgAnktyo2Rv3x4T1xvTnbvmhGlLFjxe54dcRWt9IZ7adxHbXRHxqyH0YrnGzZGwkA5jfmSr9SF2uPvm9sLBDuswvJsfJjg9HPlrkOn6KfagVcEVT9puBx3tu0EhK5IZHX0kdTlXX1g/WMjrVxRXF1Y7fQ3VgSL2ItGOVzCpaIjzlUeKI455BXng1acMvo5VDxurqeTKQRt6xUr3T7ycy29mkjRQzJI8pQkO4jKfFhvkqdfiwckbbDnUcLto4UCRIEUdByp2i5zhJWhQe9wl2Sv0NRON8VjtYXnk5KNh1ZvkqvrJ2rtA1ZX7oHGe+vTCx0pb4CodtTkZL4PPYgD1ZPWrTqVxOjWlsoSuDgE5zjkCd9vYTV9Ovvm0OPSKhh6nXfH1giqVhUrs/fBXaPOVY5U/JD43XPLJA1Y9tZ3atI922ozNnp8YJhl1puOyIj9frzVZb3WkpMOSnJ9h2b6s/dThFMCPMEfQRUTgfCLX3+FuQWilOYlziPvc50ye3oORzjBqZ2j4QbCXC5NtIfi2P6sn9Wx8vmk9NulalgtgcA4ZH16w8lk2ui+bxzGB/e5LpygW3JZSsgAxsXjJ+SfUp3xuMVbHhKjOiSRFPTIbHsLZIr1bivTcVbR7Ps7A4EBwJnEZbFn3B7qDdW7QkkapIyPECcsuOZHmpHMCucMS4BjdkU7gKRp+gMCB9GK4z8X1ROQCpwAM/v7K3s/7V3gj0qqjoAPqFYnaPdUqjalmMXhoOHkqav2YjAlcNUwyGXWAfSBGojp4cAffXOSbAyVYAdSp29v/erCuF4uY3A3yh/A1SztWuBDoO//ACuC0OnFRq0H3EOFGS5uLw50Rp3CeRZiHf6VAUf6qz/hls07JDGyhimppG2SNAPFJIeQUDz64HWt89z66sBbi2sZklWAAOV5ktklm231EE5G31Vq2mpP2hOZJjvbyBAVmljjDKfTdV25Hma/MVnOiroMqEoSmdQwcEgEeorg1oPusxB+KxhwGUWQKAgEZMrhj7eVJPGJWCvHGg/RMzEbFVyqkgAb+lnpyNYVprAv7qPOQFv9lXrODXmQQREHQfj1UezEskrvCypFpCs5Gc6d8pnnjlnl7akWgLZNuvqa4l3Zv4BzP3CukkayNHboR3Kxh2x8oZwq58jgk+dS+KXJiiJQDUcKg/eY4H1c/ormoAdbeoStWoaj3VHa5w9v3muHvhITo1SzStuVHiPtxsqDf1fTU+FyVBZdJPNSQcfSNq48PsliXSNyd2Y82PUk+2oycVdslIHZQxAbUgBwSMjJ9VQdGfM4LjWnKPICflTrmAOuk5G+QQcFSNwynoQd60f3POMPdW3xu8sTmKQ/OZQMN/qUg+0msst7yaSVIEg0ySej3kiKn2s7n90b1qnZThicKtWa7njVpJDJK7EKmogDSmrBIAAA6ny6U5ZA4AnQkrZdJA/sE3y2cc0bRSoHjddLKwyCD50gdnry/gNxw21ga5a3m7uK4lOmCONlVkEzZ1OyBsFVGcY5bVcHtHdXoEfCoGCNsbydSsKj50KNhpTjltjOM5FMnZbs+llD3Ss0jsxkllb05ZG9J29vl5Ac+dMEqgNwxXDsp2b96B5JZDPdTYM87DBYjkqDkqKNgopioorimiiiihCWu23Z43cIMWlbiFtcDtyzyZG66HXwn6D8kVmqceiicxXP9lmT04pSAQf3W9FlPMEHcYrZr68jhjaWZ1jRRlmYgKPaTWK9nrkOgnFjPeXEg1TXDrGodm5iNpSp0DYAKoGAK737qQkCUzZnOmB7+2K7y9u7NBiOTvpTskaBvEx2A1YwMnrmrjg/A0WJhcqk0sra5yyhlLEAYUN8lQAoHkPXVLPbSXc0kYtxayx28bxayh8XfaxnuycKWhAO+duVUd123nS7LLG4RF7ueB2UjvFJDdyRnBHnnDdQKtoWgVcxjqGrWmcZxx8j1qTt8ErDn70g+wPwqXxLg8M1u1sVCxkeHQAugjdWTGwIO4rhwXj8N1H3kLZ6Mp2dT5OOh+49KmmemwBCkA0jBZTxG0eN2tbkeMbqw2DqOUkfkfMdDTJwTtJHLH7z4jpbUNKyOPBKOgc/JkH34yN6YeNWEN1H3cy5AOVIOGU/OQjcGs+43wea31CQd/B/eBckD/FUf8l29lZpoPszi6kJacwrS69+eY07NR/e/bMvjHZGeAk2/wAfFnZCcSqPIE7OB7QfbS49zpOlwY2+a6lW+psVbcI45PAoEbiaLGyO3L+CQAnHTBz9FMB7V2kq6blGUHmskWtPrUMv4U9RtzHDB3kUnVsjc8uYSFLCNDqgA1KRsMdDipFjKrIunoACOoIHI01SW/BWwQ8C/wAExT6wrj8Krryx4OFcrcAOUIV++diDjbAB336VTbaHftGIEcPZJVbEXD8hxVXJIFGWIA8zXOQyaEk0tDA7affDodIJBIKrzIOOfKrq4e0k96SWFgQ6qXnaZn7vWyAAKZGZmVW1HYD5Prx9cQYF1kvZTPL+rhUeEHyiiHM/vH1VivFGn9pN52gN6PA8EWbsx7nX3D7BmXYD9+cwq3g3D8wupISy7zvNRXTJOF9HvTn9Gp3A288eWme5DYE9/e6NCTaUhGnBZI9Xjx+8zYHqWs943bTPIiXqtBDIuY0B9Js8pWHJgMHR6xvtWr+5NfSTWIWRi7QyNDrPylTGk+vCkLn92mLMHl5NWbwGA1DfpOs6+TtqLBSHcxdLsTpJ3aBGQnLilv3XYtN/av8APtnTP8Dq34NSfavpu4j89HT/AIuP+Jpp91/tJZSm2SKYSTW9yyyBVY6VZSr+LGDhguQCaR5uIWr4DOpxuNnyPZtmlLdSJqzBII0CdY+U92bXa2jF4Ah2kxhgeeSuLvgml+9tlRGIw6EYRxnPQbMPPFVl7FMsiSXEWmJMkaMuA3zpCBkADONseuoq3Fqd1V28sJLg+w4oMluRvBJj/Lf8M1RTdUZgZP8A248Z9VZaKljeSbzWk/7xE7rvpHFSJuKd4NFvlmPy9JCoD1JI3PkBUu1gEaKi8lGP/NRxxJMYCy4H+FJ/2rlJxmJTgiTP+W39RUahfUwDYC7QqWalP/FaTvHpKO0R/s0mwOw5+0DNb3w/sFw6FxItsruMaWlZ5SuNwU71m0nO+Rivz7e8TjkidQsp1KQD3bYz0++tr7Le6XZ3CW0UrSR3MoVChikx3nI4YLpwTuDnkd8b1oWAFrC0iDPss/tKqx9RpY4HDQdpT9RRRT6z0UUUUIRRRRQhIvuuSqlpE7gPpuoyIM7znJXu1Hyjlg+MH0Kobbh19MA9zctBnfubcINA6BpGVizY54wOeKt+3oCcQsZ5iBCEljRj6KTPoK5PIFkDAew1Tdpe1KQYhgKy3L+ioOVQdZJSOSjy5nkPMJ2g/dEaM07ZgA0knTl1mvb+3h4dFNeAyySiLSGlldyxJ8C+IkDLkchtk1kOCBucnmxPMk7kn2nJpy4os9ygjnuZGUMGwEiUahnB2j9fI1Vns4v97L/8f5KlY7fQohxeSSdmjzITrWRo60qhhneNxJE7RyDky88eTDkw9Rpns+30qgCaEOfnRtp+tW/oai/Bpf72X/Z+SvPgwn97L/s/JTJ7Vs5Mi9wH7KiaZJkdeytm7fJ/cS/XH+aok/b1z+jtz7XkA+5Qfxqlu+HwoxRZJXccwO7wv8R0bezc+qov/TGPOQj1AKfv0jP1CrB2jSOOPALlx5ynyj1XO9u5JZDKSsbHmIkCqfW2c6j6zXg4jOgzlHAGd1wcD2GpKcIU85JPoIH4CplvwGA+lrbzy7f0patarKR9zCfL5U2UKg/Ax5n0E+i43V5cIiu0cJViAN2PpbjO1c4+Nzr6McAPsar2LsxasMFCQOXxj/d4q7nshakbd6vskb+uazqdqsbQRVYTuEf+yZFC0TII4/8AyF7wuyN0YP7UzB4WkmSNRGYmV1jCFssxydZz4cgAjnTpwPs9BAcxRKGPNzu59rHLH66TLDs/JbM7Wt08bOAGLxxyZxy5gY6193fEuK26mR7rXGu5KLAjAdfC8RB+1TdC32NohggnREczhzWPa+zbbUeXPMtG2eXwtUm4PDcRmKeNZEPNWG23UdQfWKt7O1jtoNEKLGkaHSqgADAJ5e3esf4Z2ju5kEkXEJSvL9Hbgg+RHc7GpUnGOIlWX3/MQQRju7fqMf3VTd2hSBxBHkqadgqxhHFIvDP0SHfJXJJ5knck/Sag3rfGufKIf/Y1O4Ycwx/5Y+4YqJeL8aR86IfiQf8AkKSZ/wAwnesVv5knapfDhiKP/LX8BUmovC2zDH/CB9W39KlVU78jvUHZlFVVwT3rn5qgD72P9KtaqJV8co89/oKAfiDVlHM7v0p0szu9wp3DRiKP/LX7wDTd7mFqJOKwFv1cUsi/xYVPuDmlHhx+Kj/y1/AVO4XfzQXUEkEjRv411AKdiucEMCMHT5dBXaTg2reO30Kss4muBtX6corIOD9t7uKeNrmYywejKCkYKg4+MGhAfCdyOqltiQBWuRuCAQQQRkEcj7K0qVVtUS1alSm6mYcvuiiirFBFFFc5HCgk8gMn6KEJc90DjFvbWbtcRJPrISOF1VhLITlFIbbAI1E9AuRk4FY9wjhQj1uyoskrFnEahUXJJ0RqNgq5wBXt52pW9uWvLjvFA8NtF3UjCKP52VXSXfmSM7YGcYA7jjlv5yfyJvyVk22s5x7tow07evXctKyUmtF9xx9FJEVe91Uccdt/OT+RN+Svf+v2/nJ/Im/JWfddqKdlutSO6oMNR/8Ar9v5yfyJvyUf9ft/OT+RN+Si67UV2W60o3HAZItmgZwOUsPpH1sAdWfPmKiI++EuMEbaZAM/TnDU9fCC385P5E35K5XXFLKQYkRnH71tKfxjpoWh/wDZvXnPsqw1oyI9PT9FKaSXA30Rv/CxH4ipUN5MD/8ArMfZKlWEltws5+JcZ+bDcL+CiuLWnD/kyXafwi4/qhrrqrSPxPmP072XQ9w/tHmD6tUi34lcdLNz/wD0jFTVur9htaxR+uSbP16RVZHb2I/XXp+i4+rZK+ve/DT6YuJP41uSPqxS7qbXH8eTj6uAVwtBH9ubQOTCVJnlmAzcX8EP7sQXJ9jOSfqFQIooZCDDBNeN0knLd1v18eAfYFq0tLrh0W8cRU+YtpdX1lM1O+Edt5yfyJvyVANIyB4RhtgTzQaodpHG8RunAcFy4JwloUbvCrSO2ptIwo2ACqPIAVY91UP4RW3nJ/Im/JR8Irbzk/kTfkocKjiSQeCgCwCAUpzW7wSSRFJCussjLGxBV/Fjwg7gkioF9qJRljlJBIPxT8j/AKehA++nr4RW/nJ/Im/JXvwht/OX+RN+SrxWeDNzrgst3ZdFzy8PiZ1aUjcOZ0DK0coGrKnun5Hcjl0Oamd9+5L/ACpPy02fCG385f5E35KPhDb+cv8AIm/JQ6q9xks64KLuyKBM3zySn337kv8AKk/LUK5Q6wypIcrhvipOm4Po+sj6qefhDb+cv8ib8leHtDb+cn8ib8lDar2mQ09eS4OyaI/ueSSrF2VSjRybE6T3Um4O4+T0zj6KlQEtLDpSTaTJzG6jGlgckgDrTQ3H7fzk/kTfkri3HIPOT+TN+Sumq4mbqm3syi2oKgeZBnQupWm73Pe0hhdbKY/Ettbsf1bf3THPot8jyPh6oAknjMH+J/Jm/JXxJxW3YEHvMH/Bm/J99FCo+k68BvTtZjKjYJX6KopO9zXtIby3YOWaSFgjOylS4xlWIIB1Y2O2CQSNjgONboIIkLHIjBFcLz9G/wDAfwNd6+HQEEHkRg11cX5wsA/cQ6f7pf8AiuKkaZM+Qz0xy+ny5f8Au2wr7n/DAMC1UAcvHJ+avfgDw39mX7cn5qzfoD4hw+U/9aNR4rH4Ff5X/u5/piuuk1rfwB4b+zL9uT81HwB4b+zL9uT81RPZx8XL5Uhbh4eayTTXumta+APDf2Zftyfmo+APDf2Zftyfmo/jj4uXyj64eHmsmC19BTWsfALhv7Mv25PzUfAHhv7Mv25PzUfxx8XL5R9ePDzWUiOvru61P/8AH/Df2Zftyfmo+AHDf2Zftyfmo/jj4uXyj68eHmss7uve7rUvgBw39mX7cn5qPgBw39mX7cn5qP40+Ll8o+vHh5rLe7NHdmtS+AHDf2Zftyfmo+AHDf2Zftyfmo/jT4uXyj68eHmst7s0d2a1L4AcN/Zl+3J+aj4AcN/Zl+3J+aufxx8XL5R9ePDzWW90aO6Nal8AOG/sy/bk/NR8AOG/sy/bk/NR/HHxcvlH148PNZb3Ro7qtS+AHDf2Zftyfmo+AHDf2Zftyfmo/jj4uXyj68eHmst7qve6rUfgBw39mX7cn5qPgBw39mX7cn5qP44+Ll8o+vHh5rLu6Ned0a0S67IcNRtAsi7YU4V2+UxXrIOWDuduW+9RLbs/wt8gWL58OBqbJD8tjIPp6Dzrv8cfFy+UfXjw80i90a87utB+C/DNgLJiSCcamHLzzJ9/XB8q9+C/DcZ94v121NnABOf0nI4OM4O3Kj+NPi5fKPrx4eaje5OMe+/44/8Aga0OqLsxw22gV/e8Bh1EFwSTk46kseQ+7B5EVe1oUmXGBuoJGo6+8u1ooooqxQRRRRQhFFFFCEUUUUIRRRRQhFFFFCEUUUUIRRRRQhFFFFCEUUUUIRRRRQhFFFFCEUUUUIRRRRQhFFFFCF//2Q==',
            modalContent: {
                text: [
                    "Company Overview: Discovery Education is a division of Discovery, Inc., which is known for its portfolio of television networks, including the Discovery Channel, Animal Planet, and TLC. Discovery Education provides digital textbooks, multimedia content, and professional development resources to educators around the world.",
                    "Curriculum Alignment: Discovery Education's resources are aligned with educational standards such as the Common Core State Standards (in the United States) and other national and international standards. This ensures that educators can easily integrate the content into their existing curriculum.",
                    "Impact on Education: Discovery Education is committed to transforming teaching and learning through the use of technology and media. By providing dynamic and engaging educational content, Discovery Education aims to inspire students and empower educators to achieve academic success.",
                ],
                images: [
                    'https://allpostnews.co.uk/wp-content/uploads/2021/05/Discovery-Education-Experience-2-002.jpg',
                    'https://tse2.mm.bing.net/th?id=OIP.aurql0Pls4YGWpsLmxFUZQHaE8&pid=Api&P=0&h=180',
                    'https://blog.discoveryeducation.com/wp-content/uploads/2022/09/Header-1200x675-1.png'
                ]
            }
        },
        {
            id: 3,
            title: 'Parenting for College',
            content: 'Services with information for parents of college-bound and current students at universities. Articles discuss the most recent advancements in colleges and universities around the worlds.',
            imageSrc: 'https://img.freepik.com/free-vector/parents-helping-children-with-homework-illustration_23-2150140087.jpg',
            modalContent: {
                text: [
                    "Supporting Independence: As your child prepares for college, it's essential to encourage their independence. This includes fostering decision-making skills, time management, and problem-solving abilities. Gradually shifting responsibilities to your child helps them develop self-reliance, which is crucial for success in college and beyond.",
                    "Navigating the College Application Process: The college application process can be overwhelming for both parents and students. Offer guidance and support as your child researches colleges, prepares application materials, and navigates deadlines. Encourage them to explore a range of options and find the best fit for their interests, academic goals, and personal preferences.",
                    "Fostering Social Connections: Building social connections is an integral part of the college experience. Encourage your child to participate in campus activities, join clubs or organizations, and make connections with peers who share similar interests. Support their efforts to develop friendships, build a supportive network, and engage in positive social interactions.",
                ],
                images: [
                    'https://tse1.mm.bing.net/th?id=OIP.PafTb0btb_N6Pb7AaBfUygHaE8&pid=Api&P=0&h=180',
                    'http://images.huffingtonpost.com/2015-09-22-1442932242-3836131-CollegeFamily.jpg',
                    'https://1.bp.blogspot.com/-SrZCmirTvfU/Ub8szPGLOaI/AAAAAAAAArE/gygT24-_KHY/s1600/parenting.jpg'
                ]
            }
        },
        {
            id: 4,
            title: 'The Confident Teacher',
            content: 'An English instructor writes articles and offers advise to other English teachers. Alex Quigley, a veteran educator, gives his opinions on teaching reading and literature at home and in the classroom, as well as having access to online materials.',
            imageSrc: 'https://img.freepik.com/premium-vector/friendly-approachable-cartoon-male-teacher-standing-confidently-front-blackboard_851674-43572.jpg',
            modalContent: {
                text: [
                    "Self-efficacy: The book explores the concept of self-efficacy in teaching, which refers to a teacher's belief in their ability to positively impact student learning outcomes. Quigley discusses strategies for enhancing teacher self-efficacy and overcoming self-doubt.",
                    "Classroom management: Effective classroom management is essential for creating a positive and productive learning environment. Quigley offers advice on establishing clear expectations, managing behavior effectively, and fostering a positive classroom culture.",
                    "Professional development: Continuous professional development is key to improving teaching practice and building confidence. Quigley offers guidance on seeking out professional learning opportunities, reflecting on teaching practice, and collaborating with colleagues to enhance teaching effectiveness.",
                ],
                images: [
                    'https://www.teflcourse.net/uploads/teacher-portrait1.jpg',
                    'https://tse2.mm.bing.net/th?id=OIP.zGW9VEHlfP-xkv8WtHDwDwHaE8&pid=Api&P=0&h=180',
                    'https://image.freepik.com/free-photo/confident-teacher-explaining-lesson-pupils_74855-9751.jpg'
                ]
            }
        },
        {
            id: 5,
            title: "Education Week",
            content: 'Parents, educators, and legislators should be aware of this breaking news. Covers K-12 educational issues, including factual news stories and data, as well as opinion pieces from education professionals.',
            imageSrc: 'https://img.freepik.com/free-photo/view-3d-young-school-student_23-2151103654.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1715644800&semt=ais_user',
            modalContent: {
                text: [
                    "Purpose: Education Week aims to promote the value of education and encourage individuals, families, and communities to engage in learning activities. It serves as a platform to discuss educational policies, challenges, and solutions.",
                    "Themes: Each Education Week may have a specific theme or focus, such as literacy, STEM (Science, Technology, Engineering, and Mathematics) education, inclusive education, digital learning, environmental education, or global citizenship.",
                    "Promotion: Education Week events are usually promoted through various channels, including social media, websites, newsletters, press releases, posters, and community outreach. Engaging stakeholders and media coverage help to amplify the impact of the event.",
                ],
                images: [
                    'http://2.bp.blogspot.com/-KZ1AbKNqUyU/VbrVuU-p_dI/AAAAAAAAH04/zGJwoUTAxqA/s1600/ArtClass.jpg',
                    'https://i.pinimg.com/originals/0e/64/4e/0e644e85e17e41620a3f8e02074e19ef.jpg',
                    'https://www.cmcc.edu/wp-content/uploads/2018/07/ECE-Program-Header-1024x683.jpg'
                ]
            }
        },
        {
            id: 6,
            title: 'Educational Technology (EdTech) and Mobile Learning',
            content: 'Articles and tips aimed at assisting instructors and students in seamlessly integrating technology into the classroom by utilizing the most recent digital tools.',
            imageSrc: 'https://media.istockphoto.com/id/1168910967/vector/online-education-and-e-learning-via-digital-device.jpg?s=612x612&w=0&k=20&c=gTxy_vzWPlR-CIQQ4GoDc7NLDXg-TIcJDTChDvarscc=',
            modalContent: {
                text: [
                    "Accessibility and Flexibility: Educational technology, including mobile learning, enhances accessibility and flexibility by providing learners with the opportunity to access educational resources anytime, anywhere. Whether through online courses, educational apps, or digital textbooks, learners can engage in learning activities at their own pace and convenience, accommodating diverse learning styles and preferences.",
                    "Personalization and Adaptability: With the use of educational technology and mobile learning applications, instructors can personalize learning experiences to meet the individual needs and preferences of each learner. Adaptive learning algorithms can analyze learner data and provide customized learning pathways, resources, and assessments tailored to each student's strengths, weaknesses, and learning goals.",
                    "Engagement and Interactivity: Both Educational Technology and Mobile Learning leverage interactive and engaging learning experiences to enhance student engagement and participation. .",

                ],
                images: [
                    'https://tse4.mm.bing.net/th?id=OIP.c5Lhl2NvFG8iIKYank0A1AHaE7&pid=Api&P=0&h=180',
                    'https://www.robotlab.com/hubfs/AI-Classroom.jpg#keepProtocol',
                    'https://acerforeducation.acer.com/wp-content/uploads/2018/08/iStock-902483320.jpg'
                ]
            }
        },
    ];

    const handleReadMore = (post) => {
        setSelectedPost(post);
        setShowModal(true);
    };

    return (
        <div>
            <img src="https://contentadore.com/wp-content/uploads/2017/09/how-to-create-blog-1170x560.jpg" alt="Header Image" className="blog-header" />
            <div className="container-fluid py-4">
                <div className='blog-container'>
                    {blogPosts.map((post, index) => (
                        <div key={post.id} className="row mb-5 align-items-center">
                            <div className="col-md-10 mx-auto">
                                <div className="card shadow">
                                    <div className="row">
                                        {index % 2 === 0 ? (
                                            <>
                                                <div className="col-md-6 ">
                                                    <div className="blog-image-container">
                                                        <Image
                                                            src={post.imageSrc}
                                                            alt={`Related Image ${post.id}`}
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 p-4 fade-right-enter">
                                                    <h5 className="card-title" style={{ fontSize: '30px' }}>{post.title}</h5>
                                                    <p className="card-text" style={{ fontSize: '20px' }}>{post.content}</p>
                                                    <Button variant="primary" onClick={() => handleReadMore(post)}>Read More</Button>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="col-md-6 p-5 fade-left-enter">
                                                    <h5 className="card-title" style={{ fontSize: '30px' }}>{post.title}</h5>
                                                    <p className="card-text" style={{ fontSize: '20px' }}>{post.content}</p>
                                                    <Button variant="primary" onClick={() => handleReadMore(post)}>Read More</Button>
                                                </div>
                                                <div className="col-md-6 fade-right-enter">
                                                    <div className="blog-image-container">
                                                        <Image
                                                            src={post.imageSrc}
                                                            alt={`Related Image ${post.id}`}
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedPost && (
                <Modal show={showModal} onHide={() => setShowModal(false)} centered size="xl" backdrop="static">
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedPost.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {selectedPost.modalContent.text.map((point, index) => {
                            const [title, content] = point.split(':');
                            return (
                                <p key={index}>
                                    <strong>{title}:</strong> {content}
                                </p>
                            );
                        })}
                        <div className="d-flex flex-row justify-content-start flex-wrap">
                            {selectedPost.modalContent.images.map((image, index) => (
                                <div key={index} className={`modal-image-container fade-in-${index === 0 ? 'left' : index === 1 ? 'top' : 'right'}-enter`}>
                                    <Image src={image} alt={`Image ${index}`} className="img-thumbnail-modal" />
                                </div>
                            ))}
                        </div>
                    </Modal.Body>
                </Modal>
            )}
        </div>
    );
};
export default BlogPage;