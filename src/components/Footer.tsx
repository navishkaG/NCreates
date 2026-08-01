export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 px-6 py-6 mt-12 text-sm text-gray-500 text-center">
      © {new Date().getFullYear()} NCreates. All rights reserved.
    </footer>
  );
}