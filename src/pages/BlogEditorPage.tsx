
import React, { useState } from 'react';
import { 
  Bold, 
  Italic, 
  List, 
  ListOrdered, 
  Quote, 
  Code as CodeIcon,
  Minus, 
  Link as LinkIcon, 
  Image as ImageIcon, 
  ChevronDown, 
  Save, 
  Eye, 
  X,
  Heading1,
  Heading2,
  Heading3,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Underline,
  FileUp,
  Clock,
  Tag as TagIcon
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Separator } from '../components/ui/separator';
import { CodeBlock } from '../components/blog/CodeBlock';
import { Terminal } from '../components/magicui/terminal';

const BlogEditorPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showImageUploader, setShowImageUploader] = useState(false);
  const [showCodeEditor, setShowCodeEditor] = useState(false);
  const [showTerminalEditor, setShowTerminalEditor] = useState(false);
  const [codeLanguage, setCodeLanguage] = useState('javascript');
  const [codeContent, setCodeContent] = useState('');
  const [terminalContent, setTerminalContent] = useState('');
  const [previewMode, setPreviewMode] = useState(false);
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [publishDate, setPublishDate] = useState('');
  const [tags, setTags] = useState('');
  
  const handleInsertCode = () => {
    setContent(prev => prev + `\n\n\`\`\`${codeLanguage}\n${codeContent}\n\`\`\`\n\n`);
    setShowCodeEditor(false);
    setCodeContent('');
  };
  
  const handleInsertTerminal = () => {
    setContent(prev => prev + `\n\n<Terminal>\n${terminalContent}\n</Terminal>\n\n`);
    setShowTerminalEditor(false);
    setTerminalContent('');
  };
  
  const formatText = (format: string) => {
    // This would implement the actual formatting logic
    console.log(`Formatting with: ${format}`);
  };
  
  const toolbarButtons = [
    { icon: <Bold size={18} />, title: 'Bold', action: () => formatText('bold') },
    { icon: <Italic size={18} />, title: 'Italic', action: () => formatText('italic') },
    { icon: <Underline size={18} />, title: 'Underline', action: () => formatText('underline') },
    { icon: <List size={18} />, title: 'Bullet List', action: () => formatText('bulletList') },
    { icon: <ListOrdered size={18} />, title: 'Numbered List', action: () => formatText('numberedList') },
    { icon: <Quote size={18} />, title: 'Quote', action: () => formatText('quote') },
    { icon: <CodeIcon size={18} />, title: 'Code', action: () => setShowCodeEditor(true) },
    { icon: <Minus size={18} />, title: 'Divider', action: () => formatText('divider') },
    { icon: <LinkIcon size={18} />, title: 'Link', action: () => formatText('link') },
    { icon: <ImageIcon size={18} />, title: 'Image', action: () => setShowImageUploader(true) },
  ];

  const alignmentButtons = [
    { icon: <AlignLeft size={18} />, title: 'Align Left', action: () => formatText('alignLeft') },
    { icon: <AlignCenter size={18} />, title: 'Align Center', action: () => formatText('alignCenter') },
    { icon: <AlignRight size={18} />, title: 'Align Right', action: () => formatText('alignRight') },
  ];

  const headingButtons = [
    { icon: <Heading1 size={18} />, title: 'Heading 1', action: () => formatText('h1') },
    { icon: <Heading2 size={18} />, title: 'Heading 2', action: () => formatText('h2') },
    { icon: <Heading3 size={18} />, title: 'Heading 3', action: () => formatText('h3') },
  ];
  
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Editor Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Create New Article</h1>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              className="border-gray-700 bg-gray-900/50 text-gray-300 hover:bg-gray-800"
              onClick={() => setPreviewMode(!previewMode)}
            >
              {previewMode ? (
                <>
                  <CodeIcon size={16} className="mr-1.5" />
                  Edit
                </>
              ) : (
                <>
                  <Eye size={16} className="mr-1.5" />
                  Preview
                </>
              )}
            </Button>
            <Button 
              size="sm" 
              className="bg-blue-600 hover:bg-blue-500"
            >
              <Save size={16} className="mr-1.5" />
              Publish
            </Button>
          </div>
        </div>
        
        {/* Cover Image Uploader */}
        <div className="mb-6 bg-gray-900/40 border border-gray-800 rounded-lg p-4">
          <Label htmlFor="coverImage" className="text-gray-300 mb-4 block">Cover Image</Label>
          {coverImage ? (
            <div className="relative rounded-lg overflow-hidden">
              <img src={coverImage} alt="Cover" className="w-full h-60 object-cover" />
              <Button 
                variant="destructive"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() => setCoverImage(null)}
              >
                <X size={16} />
              </Button>
            </div>
          ) : (
            <div className="border-2 border-dashed border-gray-700 rounded-lg h-48 flex flex-col items-center justify-center bg-gray-800/50">
              <ImageIcon className="h-10 w-10 text-gray-400 mb-2" />
              <p className="text-gray-300 mb-2">Upload a cover image (16:9 recommended)</p>
              <Button 
                variant="secondary" 
                size="sm"
                className="bg-gray-700 text-white hover:bg-gray-600"
              >
                <FileUp size={16} className="mr-1.5" />
                Upload Image
              </Button>
            </div>
          )}
        </div>
        
        {/* Article Metadata */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="md:col-span-2">
            <Label htmlFor="title" className="text-gray-300 mb-2 block">Article Title</Label>
            <Input
              id="title"
              placeholder="Enter a descriptive title..."
              className="bg-gray-900/50 border-gray-800 text-white placeholder-gray-500 text-lg"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          
          <div>
            <Label htmlFor="publishDate" className="text-gray-300 mb-2 block">Publish Date</Label>
            <div className="relative">
              <Input
                id="publishDate"
                type="date"
                className="w-full bg-gray-900/50 border-gray-800 text-white"
                value={publishDate}
                onChange={(e) => setPublishDate(e.target.value)}
              />
              <Clock size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          
          <div className="md:col-span-2">
            <Label htmlFor="category" className="text-gray-300 mb-2 block">Category</Label>
            <div className="relative">
              <select
                id="category"
                className="w-full bg-gray-900/50 border-gray-800 text-white rounded-md py-2 px-3 appearance-none"
              >
                <option value="education">Education</option>
                <option value="tutorials">Tutorials</option>
                <option value="career">Career</option>
                <option value="research">Research</option>
                <option value="news">News</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDown size={18} className="text-gray-400" />
              </div>
            </div>
          </div>
          
          <div>
            <Label htmlFor="readTime" className="text-gray-300 mb-2 block">Read Time (mins)</Label>
            <Input
              id="readTime"
              type="number"
              placeholder="5"
              className="bg-gray-900/50 border-gray-800 text-white placeholder-gray-500"
            />
          </div>
        </div>
        
        {previewMode ? (
          /* Preview Mode */
          <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 mb-6">
            <h1 className="text-3xl font-bold mb-6">{title || 'Untitled Article'}</h1>
            <div className="prose prose-invert prose-blue max-w-none">
              {content || 'No content yet...'}
            </div>
          </div>
        ) : (
          /* Editor Mode */
          <>
            {/* Editor Toolbar */}
            <div className="bg-gray-900/40 border border-gray-800 rounded-t-lg p-2 flex flex-wrap">
              {/* Heading styles */}
              <div className="mr-2 mb-2 sm:mb-0">
                <select 
                  className="bg-gray-800 border-none text-sm text-white py-1 px-2 rounded"
                  defaultValue="paragraph"
                >
                  <option value="paragraph">Paragraph</option>
                  <option value="h1">Heading 1</option>
                  <option value="h2">Heading 2</option>
                  <option value="h3">Heading 3</option>
                </select>
              </div>
              
              <Separator orientation="vertical" className="mx-2 h-6 hidden sm:block" />
              
              {/* Text formatting */}
              <div className="flex flex-wrap mb-2 sm:mb-0">
                {toolbarButtons.map((button, index) => (
                  <React.Fragment key={index}>
                    <button
                      className="p-2 hover:bg-gray-800/80 rounded-md transition-colors"
                      title={button.title}
                      onClick={button.action}
                    >
                      {button.icon}
                    </button>
                    {(index === 2 || index === 5 || index === 7) && (
                      <Separator orientation="vertical" className="mx-2 h-6 hidden sm:block" />
                    )}
                  </React.Fragment>
                ))}
              </div>
              
              <div className="flex-grow"></div>
              
              {/* Advanced features */}
              <div className="flex">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="bg-gray-800/70 text-gray-300 border-gray-700 hover:bg-gray-800"
                  onClick={() => setShowTerminalEditor(true)}
                >
                  <Terminal size={16} className="mr-1" />
                  Terminal
                </Button>
              </div>
            </div>
            
            {/* Secondary toolbar */}
            <div className="bg-gray-800/50 border-x border-gray-800 p-1.5 flex flex-wrap">
              {/* Text alignment */}
              <div className="flex space-x-1 mr-3">
                {alignmentButtons.map((button, index) => (
                  <button
                    key={index}
                    className="p-1.5 hover:bg-gray-700/80 rounded-md transition-colors"
                    title={button.title}
                    onClick={button.action}
                  >
                    {button.icon}
                  </button>
                ))}
              </div>
              
              <Separator orientation="vertical" className="mx-2 h-6 hidden sm:block" />
              
              {/* Heading shortcuts */}
              <div className="flex space-x-1">
                {headingButtons.map((button, index) => (
                  <button
                    key={index}
                    className="p-1.5 hover:bg-gray-700/80 rounded-md transition-colors"
                    title={button.title}
                    onClick={button.action}
                  >
                    {button.icon}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Text Editor */}
            <textarea
              className="w-full min-h-[500px] bg-gray-900/40 border-t-0 border border-gray-800 rounded-b-lg p-4 text-white resize-none focus:outline-none"
              placeholder="Write your article here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </>
        )}
        
        {/* Tags Input */}
        <div className="mt-6 mb-10">
          <div className="flex items-center mb-2">
            <TagIcon size={16} className="text-gray-400 mr-2" />
            <Label htmlFor="tags" className="text-gray-300">Tags (comma separated)</Label>
          </div>
          <Input
            id="tags"
            placeholder="algorithms, data structures, programming..."
            className="bg-gray-900/50 border-gray-800 text-white placeholder-gray-500"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        
        {/* Publishing Options */}
        <div className="flex justify-between items-center bg-gray-900/40 border border-gray-800 rounded-lg p-4 mb-6">
          <div>
            <h3 className="font-medium text-white">Ready to publish?</h3>
            <p className="text-sm text-gray-400">This post will be available to all users</p>
          </div>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              className="border-gray-700 text-gray-300 hover:bg-gray-800"
            >
              Save Draft
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-500">
              Publish Now
            </Button>
          </div>
        </div>
        
        {/* Image Uploader Modal */}
        {showImageUploader && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="bg-gray-900 border border-gray-800 rounded-lg w-full max-w-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Insert Image</h3>
                <button 
                  className="p-1 hover:bg-gray-800 rounded-full"
                  onClick={() => setShowImageUploader(false)}
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-10 border-2 border-dashed border-gray-700 rounded-lg bg-gray-800/50 text-center">
                <div className="mb-3">
                  <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                </div>
                <p className="text-gray-300 mb-2">We recommend uploading or dragging in an image that is 1920x1080 pixels</p>
                <Button className="mt-2 bg-blue-600 hover:bg-blue-500">
                  Upload from computer
                </Button>
              </div>
              
              <div className="flex justify-end mt-6 space-x-2">
                <Button 
                  variant="outline" 
                  className="border-gray-700 text-gray-300"
                  onClick={() => setShowImageUploader(false)}
                >
                  Cancel
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-500">
                  Insert Image
                </Button>
              </div>
            </div>
          </div>
        )}
        
        {/* Code Editor Modal */}
        {showCodeEditor && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="bg-gray-900 border border-gray-800 rounded-lg w-full max-w-3xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Insert Code</h3>
                <button 
                  className="p-1 hover:bg-gray-800 rounded-full"
                  onClick={() => setShowCodeEditor(false)}
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="mb-4">
                <Label htmlFor="codeLanguage" className="text-gray-300 mb-2 block">Language</Label>
                <select
                  id="codeLanguage"
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-md py-2 px-3"
                  value={codeLanguage}
                  onChange={(e) => setCodeLanguage(e.target.value)}
                >
                  <option value="javascript">JavaScript</option>
                  <option value="typescript">TypeScript</option>
                  <option value="python">Python</option>
                  <option value="java">Java</option>
                  <option value="go">Go</option>
                  <option value="rust">Rust</option>
                  <option value="c">C</option>
                  <option value="cpp">C++</option>
                  <option value="csharp">C#</option>
                  <option value="php">PHP</option>
                  <option value="ruby">Ruby</option>
                  <option value="swift">Swift</option>
                  <option value="kotlin">Kotlin</option>
                </select>
              </div>
              
              <div className="mb-6">
                <Label htmlFor="codeContent" className="text-gray-300 mb-2 block">Code</Label>
                <textarea
                  id="codeContent"
                  className="w-full h-64 bg-gray-800 border border-gray-700 text-white font-mono text-sm p-4 rounded-md resize-none focus:outline-none focus:border-blue-500"
                  value={codeContent}
                  onChange={(e) => setCodeContent(e.target.value)}
                  placeholder="Paste or type your code here..."
                />
              </div>
              
              <div className="flex justify-end space-x-2">
                <Button 
                  variant="outline" 
                  className="border-gray-700 text-gray-300"
                  onClick={() => setShowCodeEditor(false)}
                >
                  Cancel
                </Button>
                <Button 
                  className="bg-blue-600 hover:bg-blue-500"
                  onClick={handleInsertCode}
                >
                  Insert Code
                </Button>
              </div>
            </div>
          </div>
        )}
        
        {/* Terminal Editor Modal */}
        {showTerminalEditor && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="bg-gray-900 border border-gray-800 rounded-lg w-full max-w-3xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Insert Terminal</h3>
                <button 
                  className="p-1 hover:bg-gray-800 rounded-full"
                  onClick={() => setShowTerminalEditor(false)}
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="mb-6">
                <Label htmlFor="terminalContent" className="text-gray-300 mb-2 block">Terminal Content</Label>
                <textarea
                  id="terminalContent"
                  className="w-full h-64 bg-gray-800 border border-gray-700 text-white font-mono text-sm p-4 rounded-md resize-none focus:outline-none focus:border-blue-500"
                  value={terminalContent}
                  onChange={(e) => setTerminalContent(e.target.value)}
                  placeholder="$ npm install my-package\n> Installing dependencies...\n> Done!"
                />
              </div>
              
              <div className="mb-6">
                <Label className="text-gray-300 mb-2 block">Preview</Label>
                <div className="border border-gray-700 rounded-lg overflow-hidden">
                  <Terminal>
                    <pre className="whitespace-pre-wrap">{terminalContent || '$ Type some terminal commands here'}</pre>
                  </Terminal>
                </div>
              </div>
              
              <div className="flex justify-end space-x-2">
                <Button 
                  variant="outline" 
                  className="border-gray-700 text-gray-300"
                  onClick={() => setShowTerminalEditor(false)}
                >
                  Cancel
                </Button>
                <Button 
                  className="bg-blue-600 hover:bg-blue-500"
                  onClick={handleInsertTerminal}
                >
                  Insert Terminal
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogEditorPage;
