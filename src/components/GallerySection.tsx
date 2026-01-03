import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import studentsWithStaff from '@/assets/gallery/students-with-staff.jpg';
import studentsAssembly from '@/assets/gallery/students-assembly.jpg';
import staffWithStudents from '@/assets/gallery/staff-with-students.jpg';
import studentsGroup from '@/assets/gallery/students-group.jpg';
import studentsWalking from '@/assets/gallery/students-walking.jpg';
import studentBus from '@/assets/gallery/student-bus.jpg';
import studentBoarding from '@/assets/gallery/student-boarding.jpg';
import studentSmiling from '@/assets/gallery/student-smiling.jpg';
import studentsSeated from '@/assets/gallery/students-seated.jpg';
import studentsLargeGroup from '@/assets/gallery/students-large-group.jpg';

const galleryImages = [
  { src: studentsLargeGroup, alt: 'Students gathered for an educational excursion group photo' },
  { src: studentsWithStaff, alt: 'WASAF staff with students during educational trip' },
  { src: studentsAssembly, alt: 'Students assembling before the excursion departure' },
  { src: staffWithStudents, alt: 'Staff member guiding students on educational trip' },
  { src: studentsGroup, alt: 'Students in uniform ready for excursion' },
  { src: studentsWalking, alt: 'Students walking together during educational visit' },
  { src: studentBus, alt: 'Student boarding the excursion bus' },
  { src: studentBoarding, alt: 'Students getting on transport for educational trip' },
  { src: studentSmiling, alt: 'Happy student enjoying the educational excursion' },
  { src: studentsSeated, alt: 'Students seated together during the trip' },
];

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const goToPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1);
    }
  };
  
  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Our Impact
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            Gallery
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            See the faces of hope and the communities we serve across Ghana. 
            Every image tells a story of transformation and empowerment.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-secondary transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); goToPrev(); }}
            className="absolute left-4 text-white hover:text-secondary transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={48} />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 text-white hover:text-secondary transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight size={48} />
          </button>
          
          <img
            src={galleryImages[selectedIndex].src}
            alt={galleryImages[selectedIndex].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          
          <div className="absolute bottom-4 text-white text-sm">
            {selectedIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
