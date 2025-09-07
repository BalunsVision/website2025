import { useState, useEffect, useRef  } from 'react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from '@/components/ui/carousel';

const SolutionDetails = () => {
  const [measurementApi, setMeasurementApi] = useState<CarouselApi>();
  const [measurementCurrent, setMeasurementCurrent] = useState(0);
  const [measurementCount, setMeasurementCount] = useState(0);

  const [countingApi, setCountingApi] = useState<CarouselApi>();
  const [countingCurrent, setCountingCurrent] = useState(0);
  const [countingCount, setCountingCount] = useState(0);

  const [defectApi, setDefectApi] = useState<CarouselApi>();
  const [defectCurrent, setDefectCurrent] = useState(0);
  const [defectCount, setDefectCount] = useState(0);

  const [classificationApi, setClassificationApi] = useState<CarouselApi>();
  const [classificationCurrent, setClassificationCurrent] = useState(0);
  const [classificationCount, setClassificationCount] = useState(0);

  const [ocrApi, setOcrApi] = useState<CarouselApi>();
  const [ocrCurrent, setOcrCurrent] = useState(0);
  const [ocrCount, setOcrCount] = useState(0);

  const [codeReadingApi, setCodeReadingApi] = useState<CarouselApi>();
  const [codeReadingCurrent, setCodeReadingCurrent] = useState(0);
  const [codeReadingCount, setCodeReadingCount] = useState(0);

  const [hybridApi, setHybridApi] = useState<CarouselApi>();
  const [hybridCurrent, setHybridCurrent] = useState(0);
  const [hybridCount, setHybridCount] = useState(0);

  // const measurementSlides = [
  //   {
  //     title: 'Precision Measurement',
  //     description:
  //       'Enabling accurate evaluation of critical parameters for items in both online and offline settings.',
  //     features: [
  //       'Application Specific Lighting: Front, Back, Edge, Dome, Bar Light, etc',
  //       'Application Specific Lenses: Telecentric Lens and FA Lens',
  //       'Diameter',
  //       'Roundness',
  //       'Angle',
  //       'Area',
  //       'Circularity',
  //       'Parallelity',
  //       'Thickness (Edge to Edge)',
  //       'Width and Height (Point to Point)',
  //       'Customised Algorithm for tailored evaluation',
  //     ],
  //     image: '/uploads/measurement/1.jpeg',
  //   },
  //   {
  //     title: 'High Accuracy Vision System',
  //     description:
  //       'Achieved using advanced imaging components for reliable and repeatable measurement results.',
  //     features: [
  //       'High Resolution Cameras',
  //       'Front / Back / Edge / Dome / Bar Light',
  //       'Telecentric & FA Lenses',
  //       'Customized Algorithms',
  //     ],
  //     image: '/uploads/measurement/1.jpg',
  //   },
  //   {
  //     title: 'DL Based OCR & Code Reading',
  //     description:
  //       'Optical character recognition and code reading for traceability and quality checks.',
  //     features: [
  //       'Printed / Dot Matrix / Inkjet / Stamping-based Text',
  //       'Bar Code, QR Code, Data Matrix',
  //       'Pharma & Micro Codes',
  //       'Multiple Codes in Single Image',
  //     ],
  //     image: '/uploads/measurement/2.jpg',
  //   },
  //   {
  //      title: 'Braille Impression Inspection on Carton',
  //       description:
  //         'Braille inspection system detects the braille pattern in pharma cartons during folding operations. It checks for missing dots, pattern mismatches, malformed braille dots, and other defects. Faulty cartons are automatically rejected at high speed.',
  //       features: [
  //         'Missing Braille Dot Check',
  //         'Pattern Mismatch Check',
  //         'Malformed Braille Dots Check',
  //         'Up to 300 metres per minute',
  //         'Line Scan Camera Based',
  //         'Interactive GUI - Easy Configuration',
  //         '24V Rejection Signal',
  //         'NG Images Saving Option',
  //       ],
  //       image: '/uploads/measurement/3.jpg',
  //   },
  //   {
  //      title: 'Braille Impression Inspection on Carton',
  //       description:
  //         'Braille inspection system detects the braille pattern in pharma cartons during folding operations. It checks for missing dots, pattern mismatches, malformed braille dots, and other defects. Faulty cartons are automatically rejected at high speed.',
  //       features: [
  //         'Missing Braille Dot Check',
  //         'Pattern Mismatch Check',
  //         'Malformed Braille Dots Check',
  //         'Up to 300 metres per minute',
  //         'Line Scan Camera Based',
  //         'Interactive GUI - Easy Configuration',
  //         '24V Rejection Signal',
  //         'NG Images Saving Option',
  //       ],
  //       image: '/uploads/measurement/4.jpg',
  //   },
  //   {
  //      title: 'Braille Impression Inspection on Carton',
  //       description:
  //         'Braille inspection system detects the braille pattern in pharma cartons during folding operations. It checks for missing dots, pattern mismatches, malformed braille dots, and other defects. Faulty cartons are automatically rejected at high speed.',
  //       features: [
  //         'Missing Braille Dot Check',
  //         'Pattern Mismatch Check',
  //         'Malformed Braille Dots Check',
  //         'Up to 300 metres per minute',
  //         'Line Scan Camera Based',
  //         'Interactive GUI - Easy Configuration',
  //         '24V Rejection Signal',
  //         'NG Images Saving Option',
  //       ],
  //       image: '/uploads/measurement/5.jpg',
  //   },
  // ];
  const measurementSlides = [
    {
      title: 'Precision Measurement',
      description:
        'Enabling accurate evaluation of critical parameters for items in both online and offline settings.',
      features: [
        'Application Specific Lighting: Front, Back, Edge, Dome, Bar Light, etc',
        'Application Specific Lenses: Telecentric Lens and FA Lens',
        'Diameter',
        'Roundness',
        'Angle',
        'Area',
        'Circularity',
        'Parallelity',
        'Thickness (Edge to Edge)',
        'Width and Height (Point to Point)',
        'Customised Algorithm for tailored evaluation',
      ],
      images: [
        '/uploads/measurement/1.jpeg',
        '/uploads/measurement/1.jpg', // newly added
        '/uploads/measurement/2.jpg',
        '/uploads/measurement/3.jpg',
        '/uploads/measurement/4.jpg',
        '/uploads/measurement/5.jpg',
      ],
    },
  ];
  const [api, setApi] = useState<any>(null);
  const intervalRef = useRef<any>(null);
  const countingSlides = [
    {
      title: 'Biscuit Counting',
      description:
        'High-speed AI-based biscuit counting for quality packaging and customer satisfaction.',
      features: [
        'Up to 300 packs per minute',
        'Stack Length up to 280mm',
        'Stack width measurement',
        'Independent of Colour Variations',
        '24V Rejection Signal',
        'NG Image Saving Option',
      ],
      image: '/uploads/count/1_biscuit.jpg',
    },
    {
      title: 'Parts Counting System',
      description:
        'High precision part counting with pattern-based identification and line-scan integration.',
      features: [
        'Precision Counting',
        'Pattern-based Part Counting',
        'Wide Area Coverage using High-Res Camera',
        '○	Longer Length Line Scan',
        '24V Rejection Signal',
        'NG Image Saving Option',
      ],
      image: '/uploads/count/2_biscuit.jpg',
    },
    {
      title: 'DL Based Part Detection',
      description:
        'Robust real-time classification and counting of mixed items using Deep Learning for industrial applications.',
      features: [
        'Partial Overlap Supported',
        'Deep Learning Algorithm',
        'High-Speed Detection',
        '24V Rejection Signal',
        'NG Image Saving Option',
      ],
      image: '/uploads/count/3_parts.jpg',
    },
    {
      title: 'Pick and Place System',
      description:
        'Automated pick and place mechanism with vision-guided positioning for accurate object manipulation.',
      features: [
        'Covers 600mm² Area',
        'Easy Job Configuration and Calibration',
        'Easy Robot Integration',
        'Multi-Component Detection',
        'Multi-Protocol Support',
        'Multi-Manufacturer Support',
      ],
      image: '/uploads/pic_place/download.jpg',
    },
  ];

  const defectSlides = [
    {
      title: 'AI-Based Defect Detection',
      description:
        'Advanced defect detection using deep learning algorithms for comprehensive quality control.',
      features: [
        'Scratch Detection',
        'Crack Detection',
        'Surface Defects',
        'Pattern Anomalies',
        'Color Variations',
        'Shape Defects',
      ],
      image: '/uploads/defect_detection/3.jpg',
    },
  ];

  const classificationSlides = [
    {
      title: 'DL-Based Classification & Counting',
      description:
        'Robust real-time classification and counting of mixed items using Deep Learning for industrial applications.',
      features: [
        'Partial Overlap Supported',
        'Deep Learning Based Algorithm',
        'High-Speed Detection',
        '24V Rejection Signal',
        'NG images saving option',
      ],
      image: '/uploads/classification/3.jpg',
    },
  ];

  const ocrSlides = [
    {
      title: 'OCR with Deep Learning',
      description:
        'Deep Learning-based OCR for accurate text extraction from complex and variable surfaces.',
      features: [
        'Printed Text Reading',
        'Printed Alpha-Numerical Code Reading',
        'Dot Matrix Printed Text Reading',
        'Stamped Text Reading',
        'Custom OCR Support',
      ],
      image: '/uploads/OCR/OCR_OCV.jpg',
    },
  ];

  const codeReadingSlides = [
    {
      title: 'Code Reading Solutions',
      description:
        'High-speed code reading system supporting 1D, 2D, and custom code formats with robust decoding algorithms.',
      features: [
        'Barcode',
        'QR Code',
        'Data Matrix Code',
        'Pharma Code',
        'Micro Code',
        'Multiple Codes in a Single Image',
      ],
      image: '/uploads/code/code-reader.jpg', // update with your actual image path
    },
  ];

  const hybridSlides = [
  {
    title: 'Hybrid AI-Driven Solutions (Cashew Sorting)',
    description:
      'Hybrid AI-driven solutions combining rule-based logic with deep learning for adaptable and high-accuracy automation.',
    features: [
      'Grading and Sorting based on Size, Shape, Colour',
      'Shell Presence/Absence Detection',
      'High Speed, High Accuracy',
      'Optimised for Processing Efficiency',
    ],
    image: '/uploads/hybrid/cashew-sorting.jpg', // update with your actual image path
  },
  ];



  useEffect(() => {
    if (!measurementApi) return;
    setMeasurementCount(measurementApi.scrollSnapList().length);
    setMeasurementCurrent(measurementApi.selectedScrollSnap() + 1);
    measurementApi.on('select', () => {
      setMeasurementCurrent(measurementApi.selectedScrollSnap() + 1);
    });
  }, [measurementApi]);
  
    useEffect(() => {
      if (!api) return;

      const startAutoplay = () => {
        intervalRef.current = setInterval(() => {
          api.scrollNext();
        }, 3000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  startAutoplay();

  // Stop autoplay on hover
  const rootNode = api.rootNode();
  rootNode.addEventListener("mouseenter", stopAutoplay);
  rootNode.addEventListener("mouseleave", startAutoplay);

  return () => {
    stopAutoplay();
    rootNode.removeEventListener("mouseenter", stopAutoplay);
    rootNode.removeEventListener("mouseleave", startAutoplay);
  };
}, [api]);

  useEffect(() => {
    if (!countingApi) return;
    setCountingCount(countingApi.scrollSnapList().length);
    setCountingCurrent(countingApi.selectedScrollSnap() + 1);
    countingApi.on('select', () => {
      setCountingCurrent(countingApi.selectedScrollSnap() + 1);
    });
  }, [countingApi]);

  useEffect(() => {
    if (!defectApi) return;
    setDefectCount(defectApi.scrollSnapList().length);
    setDefectCurrent(defectApi.selectedScrollSnap() + 1);
    defectApi.on('select', () => {
      setDefectCurrent(defectApi.selectedScrollSnap() + 1);
    });
  }, [defectApi]);

  useEffect(() => {
    if (!classificationApi) return;
    setClassificationCount(classificationApi.scrollSnapList().length);
    setClassificationCurrent(classificationApi.selectedScrollSnap() + 1);
    classificationApi.on('select', () => {
      setClassificationCurrent(classificationApi.selectedScrollSnap() + 1);
    });
  }, [classificationApi]);

  useEffect(() => {
    if (!ocrApi) return;
    setOcrCount(ocrApi.scrollSnapList().length);
    setOcrCurrent(ocrApi.selectedScrollSnap() + 1);
    ocrApi.on('select', () => {
      setOcrCurrent(ocrApi.selectedScrollSnap() + 1);
    });
  }, [ocrApi]);

  useEffect(() => {
    if (!codeReadingApi) return;
    setCodeReadingCount(codeReadingApi.scrollSnapList().length);
    setCodeReadingCurrent(codeReadingApi.selectedScrollSnap() + 1);
    codeReadingApi.on('select', () => {
      setCodeReadingCurrent(codeReadingApi.selectedScrollSnap() + 1);
    });
  }, [codeReadingApi]);

  useEffect(() => {
    if (!hybridApi) return;
    setHybridCount(hybridApi.scrollSnapList().length);
    setHybridCurrent(hybridApi.selectedScrollSnap() + 1);
    hybridApi.on('select', () => {
      setHybridCurrent(hybridApi.selectedScrollSnap() + 1);
    });
  }, [hybridApi]);

  // Listen for carousel activation events
  useEffect(() => {
    const handleCarouselActivation = (event: CustomEvent) => {
      const { sectionId } = event.detail;
      
      // Reset all carousels to first slide when activating a new section
      switch (sectionId) {
        case 'measurement':
          measurementApi?.scrollTo(0);
          break;
        case 'counting':
          countingApi?.scrollTo(0);
          break;
        case 'defect-detection':
          defectApi?.scrollTo(0);
          break;
        case 'classification':
          classificationApi?.scrollTo(0);
          break;
        case 'ocr-code':
          ocrApi?.scrollTo(0);
          break;
        case 'code-reading':
          codeReadingApi?.scrollTo(0);
          break;
        case 'hybrid-ai':
          hybridApi?.scrollTo(0);
          break;
      }
    };

    window.addEventListener('activateCarousel', handleCarouselActivation as EventListener);
    
    return () => {
      window.removeEventListener('activateCarousel', handleCarouselActivation as EventListener);
    };
  }, [measurementApi, countingApi, defectApi, classificationApi, ocrApi, codeReadingApi, hybridApi]);

  return (
    <div>
      {/* Measurement Slider */}
      <section
        id="measurement"
        className="pt-6 sm:pt-8 lg:pt-8 pb-0 bg-white overflow-x-hidden"
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="relative group">
            <Carousel
              setApi={setMeasurementApi}
              opts={{ align: "start", loop: true }}
              className="w-full"
            >
              <CarouselContent>
                {measurementSlides.map((slide, index) => (
                  <CarouselItem key={index} className="w-full">
                    <div className="bg-gradient-to-br from-gray-500 to-gray-300 text-white rounded-xl overflow-hidden shadow-2xl w-full">
                      <div className="flex flex-col lg:flex-row min-h-[600px] sm:min-h-[650px] lg:min-h-[700px]">
                        
                        {index === 0 ? (
                          <>
                            {/* Text Content */}
                            <div className="p-4 sm:p-6 lg:p-12 xl:p-16 flex flex-col justify-center order-2 lg:order-1 w-full lg:w-1/2">
                              <h2 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-6 text-orange-primary leading-tight">
                                {slide.title}
                              </h2>
                              <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-12 opacity-90 leading-relaxed">
                                {slide.description}
                              </p>

                              <div className="space-y-2 mb-6 sm:mb-12">
                                {slide.features.map((feature, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center text-sm sm:text-base"
                                  >
                                    <span className="w-2 h-2 bg-orange-primary rounded-full mr-3 flex-shrink-0"></span>
                                    {feature}
                                  </div>
                                ))}
                              </div>

                              <Button className="w-fit bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 px-4 sm:px-6 py-2 sm:py-3 font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg">
                                GET IN TOUCH
                              </Button>
                            </div>

                            {/* Nested Image Slider */}
                            <div className="order-1 lg:order-2 w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-12">
                              <Carousel
                                setApi={setApi}
                                opts={{ loop: true }}
                                className="w-full max-w-md relative group"
                              >
                                <CarouselContent className="flex items-center">
                                  {slide.images.map((imgSrc, imgIndex) => (
                                    <CarouselItem key={imgIndex} className="flex items-center justify-center">
                                      <div className="flex items-center justify-center w-full h-64">
                                        <img
                                          src={imgSrc}
                                          alt={`${slide.title} ${imgIndex + 1}`}
                                          className="object-cover h-full w-full"
                                          loading="lazy"
                                        />
                                      </div>
                                    </CarouselItem>
                                  ))}
                                </CarouselContent>

                                {/* Inner arrows - only show on hover */}
                                <CarouselPrevious
                                  className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 bg-transparent border-none shadow-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                />
                                <CarouselNext
                                  className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 bg-transparent border-none shadow-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                />
                              </Carousel>
                            </div>
                          </>
                        ) : (
                          /* Other slides with only nested image carousel */
                          <div className="w-full flex items-center justify-center p-4">
                            <Carousel
                              setApi={setApi}
                              opts={{ loop: true }}
                              className="w-full max-w-md relative group"
                            >
                              <CarouselContent className="flex items-center">
                                {slide.images.map((imgSrc, imgIndex) => (
                                  <CarouselItem
                                    key={imgIndex}
                                    className="flex items-center justify-center"
                                  >
                                    <div className="flex items-center justify-center w-full h-64">
                                      <img
                                        src={imgSrc}
                                        alt={`${slide.title} ${imgIndex + 1}`}
                                        className="object-cover h-full w-full hover:scale-105 transition-transform duration-500"
                                      />
                                    </div>
                                  </CarouselItem>
                                ))}
                              </CarouselContent>

                              {/* Inner arrows - only show on hover */}
                              <CarouselPrevious
                                className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-transparent border-none shadow-none"
                              />
                              <CarouselNext
                                className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-transparent border-none shadow-none"
                              />
                            </Carousel>
                          </div>
                        )}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Main arrows - only show on hover */}
              {measurementCount > 1 && (
                <>
                  <CarouselPrevious
                    className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-transparent border-none shadow-none"
                  />
                  <CarouselNext
                    className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-transparent border-none shadow-none"
                  />
                </>
              )}
            </Carousel>
          </div>
        </div>
      </section>


      {/* Counting Slider */}
      <section id="counting" className="pt-6 sm:pt-8 lg:pt-8 pb-0 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="relative group">
            <Carousel
              setApi={setCountingApi}
              opts={{ align: 'start', loop: true }}
              className="w-full"
            >
              <CarouselContent>
                {countingSlides.map((slide, index) => (
                  <CarouselItem key={index} className="w-full flex">
                    <div className="bg-gradient-to-br from-gray-500 to-gray-300 text-white rounded-xl overflow-hidden shadow-2xl flex-1 flex flex-col justify-between">
                      <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-[550px]">
                        
                        {/* Image Section */}
                        <div className="flex items-center justify-center p-6 sm:p-8 lg:p-12">
                          <div className="relative w-full h-[350px] sm:h-[400px] lg:h-[450px] max-w-[500px]">
                            <img
                              src={slide.image}
                              alt={slide.title}
                              className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-primary/20 rounded-full blur-xl" />
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl" />
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
                          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-orange-primary leading-tight">
                            {slide.title}
                          </h2>
                          <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-10 opacity-90 leading-relaxed">
                            {slide.description}
                          </p>
                          <div className="space-y-2 mb-6 sm:mb-10">
                            {slide.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center text-sm sm:text-base">
                                <span className="w-2 h-2 bg-orange-primary rounded-full mr-3 flex-shrink-0"></span>
                                {feature}
                              </div>
                            ))}
                          </div>
                          <Button className="w-fit bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg">
                            GET IN TOUCH
                          </Button>
                        </div>
                      </div>

                      {/* Dots */}
                      {countingCount > 1 && (
                        <div className="flex justify-center mt-6 mb-8 space-x-2">
                          {Array.from({ length: countingCount }, (_, i) => (
                            <button
                              key={i}
                              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                i === countingCurrent - 1
                                  ? 'bg-orange-primary scale-110'
                                  : 'bg-gray-300 hover:bg-gray-400'
                              }`}
                              onClick={() => countingApi?.scrollTo(i)}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Arrows */}
              {countingCount > 1 && (
                <>
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                </>
              )}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Defect Detection Slider */}
      <section id="defect-detection" className="pt-6 sm:pt-8 lg:pt-8 pb-0 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="relative group">
            <Carousel
              setApi={setDefectApi}
              opts={{ align: 'start', loop: true }}
              className="w-full"
            >
              <CarouselContent>
                {defectSlides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="bg-gradient-to-br from-gray-500 to-gray-300 text-white rounded-xl overflow-hidden shadow-2xl">
                       <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[600px] items-stretch">
                        {/* Content */}
                        <div className="p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col justify-center order-2 lg:order-1">
                          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-orange-primary leading-tight">
                            {slide.title}
                          </h2>
                          <p className="text-sm sm:text-base lg:text-lg mb-8 sm:mb-12 opacity-90 leading-relaxed">
                            {slide.description}
                          </p>
                          <div className="space-y-2 mb-8 sm:mb-12">
                            {slide.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center text-sm sm:text-base">
                                <span className="w-2 h-2 bg-orange-primary rounded-full mr-3 flex-shrink-0"></span>
                                {feature}
                              </div>
                            ))}
                          </div>
                          <Button className="w-fit bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg">
                            GET IN TOUCH
                          </Button>
                        </div>
                        {/* Image */}
                        <div className="flex items-center justify-center p-6 sm:p-8 lg:p-12 order-1 lg:order-2">
                          <div className="relative">
                            <img
                              src={slide.image}
                              alt={slide.title}
                              className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-primary/20 rounded-full blur-xl" />
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl" />
                          </div>
                        </div>
                      </div>
                      {defectCount > 1 && (
                        <div className="flex justify-center mb-8 space-x-2">
                          {Array.from({ length: defectCount }, (_, i) => (
                            <button
                              key={i}
                              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                i === defectCurrent - 1
                                  ? 'bg-orange-primary scale-110'
                                  : 'bg-gray-300 hover:bg-gray-400'
                              }`}
                              onClick={() => defectApi?.scrollTo(i)}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {defectCount > 1 && (
                <>
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                </>
              )}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Classification Slider */}
      <section id="classification" className="pt-6 sm:pt-8 lg:pt-8 pb-0 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="relative group">
            <Carousel
              setApi={setClassificationApi}
              opts={{ align: 'start', loop: true }}
              className="w-full"
            >
              <CarouselContent>
                {classificationSlides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="bg-gradient-to-br from-gray-500 to-gray-300 text-white rounded-xl overflow-hidden shadow-2xl">
                       <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[600px] items-stretch">
                        {/* Image */}
                        <div className="flex items-center justify-center p-6 sm:p-8 lg:p-12 order-1 lg:order-1">
                          <div className="relative">
                            <img
                              src={slide.image}
                              alt={slide.title}
                              className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-primary/20 rounded-full blur-xl" />
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl" />
                          </div>
                        </div>
                        {/* Content */}
                        <div className="p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col justify-center order-2 lg:order-2">
                          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-orange-primary leading-tight">
                            {slide.title}
                          </h2>
                          <p className="text-sm sm:text-base lg:text-lg mb-8 sm:mb-12 opacity-90 leading-relaxed">
                            {slide.description}
                          </p>
                          <div className="space-y-2 mb-8 sm:mb-12">
                            {slide.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center text-sm sm:text-base">
                                <span className="w-2 h-2 bg-orange-primary rounded-full mr-3 flex-shrink-0"></span>
                                {feature}
                              </div>
                            ))}
                          </div>
                          <Button className="w-fit bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg">
                            GET IN TOUCH
                          </Button>
                        </div>
                      </div>
                      {classificationCount > 1 && (
                        <div className="flex justify-center mb-8 space-x-2">
                          {Array.from({ length: classificationCount }, (_, i) => (
                            <button
                              key={i}
                              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                i === classificationCurrent - 1
                                  ? 'bg-orange-primary scale-110'
                                  : 'bg-gray-300 hover:bg-gray-400'
                              }`}
                              onClick={() => classificationApi?.scrollTo(i)}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {classificationCount > 1 && (
                <>
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                </>
              )}
            </Carousel>
          </div>
        </div>
      </section>

      {/* OCR Code Slider */}
      <section id="ocr-code" className="pt-6 sm:pt-8 lg:pt-8 pb-0 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="relative group">
            <Carousel
              setApi={setOcrApi}
              opts={{ align: 'start', loop: true }}
              className="w-full"
            >
              <CarouselContent>
                {ocrSlides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="bg-gradient-to-br from-gray-500 to-gray-300 text-white rounded-xl overflow-hidden shadow-2xl">
                      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[600px] items-stretch">
                        {/* Content */}
                        <div className="p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col justify-center order-2 lg:order-1">
                          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-orange-primary leading-tight">
                            {slide.title}
                          </h2>
                          <p className="text-sm sm:text-base lg:text-lg mb-8 sm:mb-12 opacity-90 leading-relaxed">
                            {slide.description}
                          </p>
                          <div className="space-y-2 mb-8 sm:mb-12">
                            {slide.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center text-sm sm:text-base">
                                <span className="w-2 h-2 bg-orange-primary rounded-full mr-3 flex-shrink-0"></span>
                                {feature}
                              </div>
                            ))}
                          </div>
                          <Button className="w-fit bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg">
                            GET IN TOUCH
                          </Button>
                        </div>
                        {/* Image */}
                        <div className="flex items-center justify-center p-6 sm:p-8 lg:p-12 order-1 lg:order-2">
                          <div className="relative">
                            <img
                              src={slide.image}
                              alt={slide.title}
                              className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-primary/20 rounded-full blur-xl" />
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl" />
                          </div>
                        </div>
                      </div>
                      {ocrCount > 1 && (
                        <div className="flex justify-center mb-8 space-x-2">
                          {Array.from({ length: ocrCount }, (_, i) => (
                            <button
                              key={i}
                              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                i === ocrCurrent - 1
                                  ? 'bg-orange-primary scale-110'
                                  : 'bg-gray-300 hover:bg-gray-400'
                              }`}
                              onClick={() => ocrApi?.scrollTo(i)}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {ocrCount > 1 && (
                <>
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                </>
              )}
            </Carousel>
          </div>
        </div>
      </section>

      <section id="code-reading" className="pt-6 sm:pt-8 lg:pt-8 pb-0 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="relative group">
            <Carousel
              setApi={setCodeReadingApi}
              opts={{ align: 'start', loop: true }}
              className="w-full"
            >
              <CarouselContent>
                {codeReadingSlides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="bg-gradient-to-br from-gray-500 to-gray-300 text-white rounded-xl overflow-hidden shadow-2xl">
                      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[600px] items-stretch">
                        {/* Image */}
                        <div className="flex items-center justify-center p-6 sm:p-8 lg:p-12 order-1 lg:order-1">
                          <div className="relative">
                            <img
                              src={slide.image}
                              alt={slide.title}
                              className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-primary/20 rounded-full blur-xl" />
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl" />
                          </div>
                        </div>
                        {/* Content */}
                        <div className="p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col justify-center order-2 lg:order-2">
                          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-orange-primary leading-tight">
                            {slide.title}
                          </h2>
                          <p className="text-sm sm:text-base lg:text-lg mb-8 sm:mb-12 opacity-90 leading-relaxed">
                            {slide.description}
                          </p>
                          <div className="space-y-2 mb-8 sm:mb-12">
                            {slide.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center text-sm sm:text-base">
                                <span className="w-2 h-2 bg-orange-primary rounded-full mr-3 flex-shrink-0"></span>
                                {feature}
                              </div>
                            ))}
                          </div>
                          <Button className="w-fit bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg">
                            GET IN TOUCH
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>
      
      <section id="hybrid-ai" className="pt-6 sm:pt-8 lg:pt-8 pb-0 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="relative group">
            <Carousel
              setApi={setHybridApi}
              opts={{ align: 'start', loop: true }}
              className="w-full"
            >
              <CarouselContent>
                {hybridSlides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="bg-gradient-to-br from-gray-500 to-gray-300 text-white rounded-xl overflow-hidden shadow-2xl">
                      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[600px] items-stretch">
                        {/* Image */}
                        <div className="flex items-center justify-center p-6 sm:p-8 lg:p-12 order-1 lg:order-1">
                          <div className="relative">
                            <img
                              src={slide.image}
                              alt={slide.title}
                              className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-primary/20 rounded-full blur-xl" />
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl" />
                          </div>
                        </div>
                        {/* Content */}
                        <div className="p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col justify-center order-2 lg:order-2">
                          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-orange-primary leading-tight">
                            {slide.title}
                          </h2>
                          <p className="text-sm sm:text-base lg:text-lg mb-8 sm:mb-12 opacity-90 leading-relaxed">
                            {slide.description}
                          </p>
                          <div className="space-y-2 mb-8 sm:mb-12">
                            {slide.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center text-sm sm:text-base">
                                <span className="w-2 h-2 bg-orange-primary rounded-full mr-3 flex-shrink-0"></span>
                                {feature}
                              </div>
                            ))}
                          </div>
                          <Button className="w-fit bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg">
                            GET IN TOUCH
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SolutionDetails;
