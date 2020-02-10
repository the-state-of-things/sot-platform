var Router = require('express').Router;
var router = Router();
import { Request, Response, NextFunction } from 'express';


router.get('/test', function(
    _req: Request,
    res: Response,
    next: NextFunction
): void {
    res.send('Hello Typescript API');
});

router.get('/course/:id/:page', function(
    req: Request,
    res: Response,
    next: NextFunction
): void {
    const pages = [
        {
            elements: [
                {
                    title: 'Section 1',
                    type: 'text',
                    text: 'A coffee bean is a seed of the coffee plant and the source for coffee. It is the pit inside the red or purple fruit often referred to as a cherry. Just like ordinary cherries, the coffee fruit is also a so-called stone fruit. Even though the coffee beans are seeds, they are referred to as "beans" because of their resemblance to true beans. The fruits – coffee cherries or coffee berries – most commonly contain two stones with their flat sides together. A small percentage of cherries contain a single seed, instead of the usual two. This is called a "peaberry". The peaberry occurs only between 10 and 15% of the time, and it is a fairly common (yet scientifically unproven) belief that they have more flavour than normal coffee beans. Like Brazil nuts (a seed) and white rice, coffee beans consist mostly of endosperm. The two most economically important varieties of coffee plant are the Arabica and the Robusta; ~60% of the coffee produced worldwide is Arabica and ~40% is Robusta. Arabica beans consist of 0.8–1.4% caffeine and Robusta beans consist of 1.7–4% caffeine. As coffee is one of the world\'s most widely consumed beverages, coffee beans are a major cash crop and an important export product, accounting for over 50% of some developing nations\' foreign exchange earnings.'
                },
                {
                    title: 'Picture Section',
                    type: 'image',
                    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Roasted_coffee_beans.jpg/330px-Roasted_coffee_beans.jpg',
                    text: 'Picture of some coffee beans'
                }
            ]
        },
        {
            elements: [
                {
                    title: 'Video Section',
                    type: 'video',
                    url: 'https://www.youtube.com/embed/vp2YKKTsk2U',
                    text: 'The State of Things video'
                }
            ]
        }
    ];
    let ret = {
        body: pages[parseInt(req.params.page) - 1],
        pages: pages.length
    };
    res.json(ret);
});

router.get('/course/:id', function(
    _req: Request,
    res: Response,
    next: NextFunction
): void {
    const ret = {
        title: 'The Politics of Your Coffee',
        description: 'A course about coffee.',
        completeText: 'Congratulations, now you know loads about the politics behind your coffee!',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Roasted_coffee_beans.jpg/330px-Roasted_coffee_beans.jpg'
    };
    res.json(ret);
});

router.get('/courses', function(
    _req: Request,
    res: Response,
    next: NextFunction
): void {
    const ret = [
        {
            id: 'coffee',
            title: 'The Politics of Your Coffee',
            description: 'A course about coffee.',
            progress: '0%',
        }
    ];
    res.json(ret);
});


export default router;
