
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
  X
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Separator } from '../components/ui/separator';
import { CodeBlock } from '../components/blog/CodeBlock';

const BlogEditorPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showImageUploader, setShowImageUploader] = useState(false);
  const [showCodeEditor, setShowCodeEditor] = useState(false);
  const [codeLanguage, setCodeLanguage] = useState('javascript');
  const [codeContent, setCodeContent] = useState('');
  const [previewMode, setPreviewMode] = useState(false);
  
  const handleInsertCode = () => {
    setContent(prev => prev + `\n\n\`\`\`${codeLanguage}\n${codeContent}\n\`\`\`\n\n`);
    setShowCodeEditor(false);
    setCodeContent('');
  };
  
  const toolbarButtons = [
    { icon: <Bold size={18} />, title: 'Bold', action: () => {} },
    { icon: <Italic size={18} />, title: 'Italic', action: () => {} },
    { icon: <List size={18} />, title: 'Bullet List', action: () => {} },
    { icon: <ListOrdered size={18} />, title: 'Numbered List', action: () => {} },
    { icon: <Quote size={18} />, title: 'Quote', action: () => {} },
    { icon: <CodeIcon size={18} />, title: 'Code', action: () => setShowCodeEditor(true) },
    { icon: <Minus size={18} />, title: 'Divider', action: () => {} },
    { icon: <LinkIcon size={18} />, title: 'Link', action: () => {} },
    { icon: <ImageIcon size={18} />, title: 'Image', action: () => setShowImageUploader(true) },
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
            <div className="bg-gray-900/40 border border-gray-800 rounded-t-lg p-2 flex items-center flex-wrap">
              <div className="mr-2">
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
              
              <Separator orientation="vertical" className="mx-2 h-6" />
              
              <div className="flex flex-wrap">
                {toolbarButtons.map((button, index) => (
                  <React.Fragment key={index}>
                    <button
                      className="p-2 hover:bg-gray-800/80 rounded-md transition-colors"
                      title={button.title}
                      onClick={button.action}
                    >
                      {button.icon}
                    </button>
                    {(index === 4 || index === 7) && (
                      <Separator orientation="vertical" className="mx-2 h-6" />
                    )}
                  </React.Fragment>
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
          <Label htmlFor="tags" className="text-gray-300 mb-2 block">Tags (comma separated)</Label>
          <Input
            id="tags"
            placeholder="algorithms, data structures, programming..."
            className="bg-gray-900/50 border-gray-800 text-white placeholder-gray-500"
          />
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
      </div>
    </div>
  );
};

export default BlogEditorPage;
