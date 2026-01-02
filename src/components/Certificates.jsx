import React, { useState } from 'react';
import { Modal, Card, Typography, Row, Col, Tag, Button, Spin, Pagination } from 'antd';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const { Title, Paragraph, Text } = Typography;

// TODO: Replace these with your real certificates and image URLs
const certificates = [

    {
        id: 1,
        name: 'Job Ready: Employability Skills',
        issuer: 'Wadhwani Foundation',
        date: 'Dec 22, 2025',
        images: ['https://i.ibb.co.com/rR7p9vPZ/Wadhwani-Foundation-Certificate-6948477de148b98d90fa9172-1.png'],
        skills: ['Employability Skills', 'Professional Development'],
    },
    {
        id: 2,
        name: 'SQA: Manual & Automated Testing',
        issuer: 'Ostad',
        date: 'Completed 2025',
        images: [
            'https://i.ibb.co.com/rB1fcqZ/Syed-Raiyan-Nasim-Software-Testing-12-C36302-1.png',
            'https://i.ibb.co.com/5WNzXdPY/Syed-Raiyan-Nasim-Software-Testing-12-A36303-1.png'
        ],
        skills: ['Manual Testing', 'Automated Testing', 'Software Quality Assurance'],
    },
    {
        id: 3,
        name: 'SQL (Basic) Certification',
        issuer: 'HackerRank',
        date: 'Nov 26, 2025',
        images: ['https://i.ibb.co.com/hFjLwyLn/sql-basic-certificate-1.png'],
        skills: ['SQL', 'Database'],
    },
    {
        id: 4,
        name: 'Introduction to Git',
        issuer: 'DataCamp',
        date: 'Nov 15, 2025',
        images: ['https://i.ibb.co.com/6dqFjqM/Git-Cretificate-1.png'],
        skills: ['Git', 'Version Control'],
    },
    {
        id: 5,
        name: 'Introduction to GitHub Concepts',
        issuer: 'DataCamp',
        date: 'Nov 27, 2025',
        images: ['https://i.ibb.co.com/627WJCJ/Github-Cirtificate-1.png'],
        skills: ['GitHub', 'Repository Management'],
    },
    {
        id: 6,
        name: 'Introduction to JIRA',
        issuer: 'Simplilearn',
        date: 'Oct 3, 2025',
        images: ['https://i.ibb.co.com/xtwjgsq2/Jira-1.png'],
        skills: ['JIRA', 'Project Management'],
    },
    {
        id: 7,
        name: 'n8n Course: No Code AI Agent Builder',
        issuer: 'Simplilearn',
        date: 'Oct 3, 2025',
        images: ['https://i.ibb.co.com/H5Vwz8s/N8N-1.png'],
        skills: ['n8n', 'No-Code Development', 'AI Automation'],
    },
    {
        id: 8,
        name: 'Data Navigator Badge',
        issuer: 'Professional Achievement',
        date: 'Earned 2025',
        images: ['https://i.ibb.co.com/99Q82NMZ/download.png'],
        skills: ['Data Query', 'Data Manipulation', 'Database Relationships', 'Data Analysis'],
    }
]

const Certificates = () => {
  const sectionRef = useScrollAnimation();
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const startIndex = (currentPage - 1) * pageSize;
  const visibleCertificates = certificates.slice(startIndex, startIndex + pageSize);

  const handleOpen = (cert) => {
    setSelectedCertificate(cert);
    setActiveImageIndex(0);
    setImageLoading(true);
  };

  const handleClose = () => {
    setSelectedCertificate(null);
    setActiveImageIndex(0);
    setImageLoading(false);
  };

  return (
    <section
      ref={sectionRef}
      id="certificates"
      className="section py-12 md:py-20 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <Title
            level={2}
            className="cyber-title-primary !text-4xl !font-bold !mb-4 relative inline-block group"
          >
            Certificates
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
          </Title>
          <Paragraph className="!text-gray-300 !max-w-2xl !mx-auto">
            A curated selection of certifications that highlight my continuous
            learning and technical expertise.
          </Paragraph>
        </div>

        <Row gutter={[16, 24]} className="max-w-6xl mx-auto">
          {visibleCertificates.map((cert) => (
            <Col key={cert.id} xs={24} sm={12} md={8}>
              <button
                type="button"
                onClick={() => handleOpen(cert)}
                className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl flex"
              >
                <Card
                  hoverable
                  className="cyber-card w-full h-64 overflow-hidden backdrop-blur-sm bg-gray-800/90 border-gray-700 flex flex-col"
                >
                  <div className="flex flex-col gap-2 flex-1 justify-between">
                    <Text className="text-xs text-gray-400">{cert.issuer}</Text>
                    <Title level={4} className="!mb-1 !text-white !text-lg">
                      {cert.name}
                    </Title>
                    <Text className="text-xs text-gray-400">{cert.date}</Text>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {cert.skills.map((skill) => (
                        <Tag
                          key={skill}
                          color="blue"
                          className="!text-xs !px-2 !py-1 !rounded-full"
                        >
                          {skill}
                        </Tag>
                      ))}
                    </div>
                    <Text className="mt-3 text-blue-400 text-sm">
                      Click to view certificate
                    </Text>
                  </div>
                </Card>
              </button>
            </Col>
          ))}
        </Row>

        <div className="flex justify-center mt-8">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={certificates.length}
            className="projects-pagination"
            onChange={(page) => {
              setCurrentPage(page);
              const el = document.getElementById('certificates');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            showSizeChanger={false}
          />
        </div>
      </div>

      <Modal
        open={!!selectedCertificate}
        onCancel={handleClose}
        footer={null}
        centered
        width={900}
        className="cert-modal"
      >
        {selectedCertificate && (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <div>
                <Title level={3} className="!mb-1 !text-white">
                  {selectedCertificate.name}
                </Title>
                <Text className="text-gray-400">
                  {selectedCertificate.issuer} • {selectedCertificate.date}
                </Text>
              </div>
              <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
              </div>
            </div>

            <div className="relative w-full max-h-[70vh] overflow-auto rounded-lg border border-gray-700 bg-black/80">
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10">
                  <Spin size="large" />
                </div>
              )}
              <img
                src={selectedCertificate.images?.[activeImageIndex]}
                alt={selectedCertificate.name}
                loading="lazy"
                onLoad={() => setImageLoading(false)}
                className="w-full h-auto object-contain"
              />
            </div>

            {selectedCertificate.images && selectedCertificate.images.length > 1 && (
              <div className="mt-3 flex flex-wrap gap-2 justify-center">
                {selectedCertificate.images.map((img, index) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => {
                      setActiveImageIndex(index);
                      setImageLoading(true);
                    }}
                    className={`w-20 h-14 rounded-md overflow-hidden border transition-all duration-200 ${
                      index === activeImageIndex
                        ? 'border-cyan-400 ring-2 ring-cyan-400/60'
                        : 'border-gray-700 hover:border-gray-500'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${selectedCertificate.name} thumbnail ${index + 1}`}
                        loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Certificates;
