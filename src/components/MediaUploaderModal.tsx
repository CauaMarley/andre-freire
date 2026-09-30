import React, { useState, useEffect } from 'react';
import { Upload, Check, Video, Image as ImageIcon, X, Sparkles, Youtube, Link2 } from 'lucide-react';
import { MediaSlot, getStoredMedia, saveStoredMedia, extractYouTubeId } from '../utils/mediaStore';

interface SlotConfig {
  key: MediaSlot;
  title: string;
  expectedFilename: string;
  type: 'video' | 'image';
  description: string;
}

const SLOTS: SlotConfig[] = [
  {
    key: 'hero_video',
    title: 'Vídeo do Banner Principal (Hero)',
    expectedFilename: 'lv_0_20260922212021 (1) (1).mp4 ou Link do YouTube',
    type: 'video',
    description: 'Vídeo de apresentação da academia que roda em loop no topo da Home (aceita arquivo .mp4 ou link/ID do YouTube em resolução máxima).',
  },
  {
    key: 'banner_turma',
    title: 'Foto Atualizada da Turma',
    expectedFilename: 'banner turma.jpeg',
    type: 'image',
    description: 'Foto coletiva dos alunos e professores na seção de comunidade da Home.',
  },
  {
    key: 'dan_portrait',
    title: 'Foto do Professor Dan (Perfil)',
    expectedFilename: 'Dan Modrzejewski.jpeg',
    type: 'image',
    description: 'Foto de apresentação ao lado da biografia do Professor Dan.',
  },
  {
    key: 'dan_blackbelt',
    title: 'Foto da Graduação Faixa Preta',
    expectedFilename: 'Dan Modrzejewski black belt.jpeg',
    type: 'image',
    description: 'Foto da cerimônia de entrega da faixa preta com o Prof. André Freire.',
  },
];

export function MediaUploaderModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditorMode, setIsEditorMode] = useState(false);
  const [loadingSlot, setLoadingSlot] = useState<MediaSlot | null>(null);
  const [urlInputs, setUrlInputs] = useState<Record<MediaSlot, string>>({
    hero_video: '',
    banner_turma: '',
    dan_portrait: '',
    dan_blackbelt: '',
  });
  const [previews, setPreviews] = useState<Record<MediaSlot, string>>({
    hero_video: '',
    banner_turma: '',
    dan_portrait: '',
    dan_blackbelt: '',
  });

  // Check if editor query param is present or user presses shortcut
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const hasEditorParam = params.has('editor') || params.has('admin');
    setIsEditorMode(hasEditorParam);

    // Keyboard shortcut to open: Ctrl + Shift + U or Alt + M
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'u') || (e.altKey && e.key.toLowerCase() === 'm')) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const loadAllPreviews = async () => {
    const next: Record<MediaSlot, string> = {
      hero_video: await getStoredMedia('hero_video'),
      banner_turma: await getStoredMedia('banner_turma'),
      dan_portrait: await getStoredMedia('dan_portrait'),
      dan_blackbelt: await getStoredMedia('dan_blackbelt'),
    };
    setPreviews(next);
  };

  useEffect(() => {
    if (isOpen) {
      loadAllPreviews();
    }
  }, [isOpen]);

  const handleFileChange = async (slot: MediaSlot, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoadingSlot(slot);
    try {
      const reader = new FileReader();
      reader.onload = async () => {
        const result = reader.result as string;
        await saveStoredMedia(slot, result);
        setPreviews((prev) => ({ ...prev, [slot]: result }));
        setLoadingSlot(null);
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.error('Error reading file:', err);
      setLoadingSlot(null);
    }
  };

  const handleApplyUrl = async (slot: MediaSlot) => {
    const url = urlInputs[slot].trim();
    if (!url) return;
    setLoadingSlot(slot);
    await saveStoredMedia(slot, url);
    setPreviews((prev) => ({ ...prev, [slot]: url }));
    setUrlInputs((prev) => ({ ...prev, [slot]: '' }));
    setLoadingSlot(null);
  };

  return (
    <>
      {/* 
        The floating button is strictly visible ONLY in editor mode (?editor=true or ?admin=true). 
        Public visitors will NEVER see this element.
        The editor can also toggle it via Ctrl+Shift+U.
      */}
      {isEditorMode && (
        <div className="fixed bottom-6 left-6 z-50 flex items-center gap-2 print:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white font-bold text-xs uppercase tracking-wider px-3.5 py-2.5 rounded-full shadow-2xl flex items-center gap-2 border border-zinc-700/80 backdrop-blur-md cursor-pointer transition-transform hover:scale-105"
            title="Upload ou troca das fotos e vídeo da academia (visível apenas no modo editor)"
          >
            <Upload className="w-4 h-4 text-red-500" />
            <span className="hidden sm:inline">Editor: Mídias</span>
          </button>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-zinc-900 border border-zinc-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto text-zinc-100 shadow-2xl p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 rounded-lg hover:bg-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6 border-b border-zinc-800 pb-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-red-950/80 text-red-400 text-xs font-bold uppercase rounded-md mb-2 border border-red-800/50">
                <Sparkles className="w-3.5 h-3.5" />
                Painel do Editor de Mídias
              </div>
              <h2 className="text-2xl font-heading font-black uppercase text-white tracking-wide">
                Atualizar Fotos e Vídeo da Academia
              </h2>
              <p className="text-zinc-400 text-sm mt-1">
                Este painel é exclusivo do editor e não aparece para visitantes. Você pode selecionar arquivos do seu computador ou colar links do YouTube/hospedagem de imagens.
              </p>
            </div>

            <div className="space-y-6">
              {SLOTS.map((slot) => {
                const isYouTube = slot.key === 'hero_video' && extractYouTubeId(previews[slot.key]);
                const ytId = isYouTube ? extractYouTubeId(previews[slot.key]) : null;

                return (
                  <div key={slot.key} className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-4 flex flex-col sm:flex-row items-center gap-4">
                    {/* Thumbnail Preview */}
                    <div className="w-full sm:w-36 h-24 bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 shrink-0 flex items-center justify-center relative">
                      {isYouTube && ytId ? (
                        <img 
                          src={`https://img.youtube.com/vi/${ytId}/hqdefault.jpg`} 
                          alt="YouTube thumbnail"
                          className="w-full h-full object-cover"
                        />
                      ) : slot.type === 'video' ? (
                        <video
                          src={previews[slot.key]}
                          className="w-full h-full object-cover"
                          muted
                          playsInline
                        />
                      ) : (
                        <img
                          src={previews[slot.key]}
                          alt={slot.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                      <span className="absolute top-1 left-1 bg-black/70 text-[10px] text-zinc-300 font-bold px-1.5 py-0.5 rounded">
                        {isYouTube ? (
                          <><Youtube className="w-3 h-3 inline mr-1 text-red-500" /> YouTube</>
                        ) : slot.type === 'video' ? (
                          <><Video className="w-3 h-3 inline mr-1" /> Vídeo</>
                        ) : (
                          <><ImageIcon className="w-3 h-3 inline mr-1" /> Foto</>
                        )}
                      </span>
                    </div>

                    {/* Info and Upload/Link inputs */}
                    <div className="flex-1 w-full text-left">
                      <h3 className="font-bold text-white text-base font-heading tracking-wide">
                        {slot.title}
                      </h3>
                      <p className="text-zinc-400 text-xs mt-0.5">{slot.description}</p>

                      {/* File upload button */}
                      <div className="mt-3 flex flex-wrap items-center gap-3">
                        <label className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-red-700 hover:bg-red-600 text-white rounded-md text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors shadow">
                          <Upload className="w-3.5 h-3.5" />
                          {loadingSlot === slot.key ? 'Processando...' : 'Selecionar Arquivo'}
                          <input
                            type="file"
                            accept={slot.type === 'video' ? 'video/mp4,video/*' : 'image/jpeg,image/png,image/webp,image/*'}
                            className="hidden"
                            onChange={(e) => handleFileChange(slot.key, e)}
                          />
                        </label>

                        {previews[slot.key] && (
                          <span className="text-emerald-400 text-xs flex items-center gap-1 font-medium">
                            <Check className="w-3.5 h-3.5" /> Mídia ativa
                          </span>
                        )}
                      </div>

                      {/* Link / URL input option */}
                      <div className="mt-2.5 flex items-center gap-2">
                        <div className="relative flex-1">
                          <input 
                            type="text" 
                            placeholder={slot.key === 'hero_video' ? "Ou cole o link do YouTube (ex: https://youtu.be/...)" : "Ou cole o link da imagem (URL pública)"}
                            value={urlInputs[slot.key]}
                            onChange={(e) => setUrlInputs({ ...urlInputs, [slot.key]: e.target.value })}
                            onKeyDown={(e) => { if (e.key === 'Enter') handleApplyUrl(slot.key); }}
                            className="w-full bg-zinc-900 border border-zinc-700 text-xs text-white rounded px-2.5 py-1.5 focus:outline-none focus:border-red-500 font-mono"
                          />
                        </div>
                        <button
                          onClick={() => handleApplyUrl(slot.key)}
                          disabled={!urlInputs[slot.key].trim()}
                          className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 text-white text-xs font-semibold rounded flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          <Link2 className="w-3 h-3" /> Aplicar
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-zinc-500">
                Dica: Você pode abrir este painel a qualquer momento usando o atalho <kbd className="px-1.5 py-0.5 bg-zinc-800 border border-zinc-700 rounded text-zinc-300">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 bg-zinc-800 border border-zinc-700 rounded text-zinc-300">Shift</kbd> + <kbd className="px-1.5 py-0.5 bg-zinc-800 border border-zinc-700 rounded text-zinc-300">U</kbd>
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
